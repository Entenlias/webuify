import { ViewSettings } from "../interfaces/ViewSettings";
import { WebuifySettings } from "../interfaces/WebuifySettings";
import { View } from "../view/View";
import * as http from "http";
import { URL } from "url";
import clone from "clone";
import { ViewAction } from "./ViewAction";

export class Webuify {

    public settings: WebuifySettings;
    public views: View[] = [];
    public server: http.Server;

    /**
     * Creates a new Webuify-Server
     * @param {WebuifySettings} settings 
     */
    constructor(settings: WebuifySettings) {
        this.settings = settings;
    }

    /**
     * Returns the default View for the server instance
     * @returns {View} The default view (e.g., a view with the setting "default" set to true)
     */
    getDefaultView(): View {
        for (let view of this.views) {
            if (view.settings.default) {
                return view;
            }
        }
        return null;
    }

    /**
     * Add's an view as a child of this instance
     * @param {View} view The target view, that should be added
     */
    add(view: View) {
        this.views.push(view);
    }

    /**
     * Get an view from this instance by name
     * @param {string} name
     * @returns {View|null} The matching view, or null, if no view could be found
     */
    getView(name: string): View|null {
        for (let view of this.views) {
            if (view.name == name) {
                return view;
            }
        }
        return null;
    }

    /**
     * Launches the HTTP-Server
     */
    launch() {
        this.server = http.createServer((req, res) => {
            let view: View = null;
            let url = req.url;
            url = url.substring(1);
            let parts = url.split("/");
            let viewName = parts[0];

            if(req.url == "/") {
                view = this.getDefaultView();
            } else {
                view = this.getView(viewName);
                if(!view) {
                    res.writeHead(404);
                    res.end();
                }
            }

            if(!view) {
                res.writeHead(404);
                res.end();
                return;
            }
            let viewAction = new ViewAction(req, res);
            let newView = (view.onpreload() as (action: ViewAction, oldView: View) => View)(viewAction, clone(view, true, 2));
            if(newView != null) view = newView;

            for(let element of view.elements) {
                if(!element.middleware(req, res)) {
                    return;
                }
            }
            (view.onload() as () => void)();
            res.writeHead(200, {
                "Content-Type": "text/html"
            });
            res.end(view.render())
        
        });
    


        this.server.listen(this.settings.httpPort);
    }

}