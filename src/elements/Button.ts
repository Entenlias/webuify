import { Element } from "./Element";
import { randomBytes } from "crypto";
import { View } from "../view/View";
import { IncomingMessage, ServerResponse } from "http";
import { ButtonAction } from "../server/ButtonAction";

export class ButtonElement extends Element {

    private _text: string;
    private _callback: (action: ButtonAction) => {};

    constructor(parent: View) {
        super(parent);
        this._parent = parent;
    }

    middleware(req: IncomingMessage, res: ServerResponse): boolean {
        let url = req.url;
        url = url.substring(1);
        let parts = url.split("/");
        if(parts.length != 3) {
            return true;
        }

        console.log("test");

        let action = parts[1];
        let id = parts[2];

        if(action != "click") return true;
        if(id != this._id) return true;
        let buttonAction = new ButtonAction(req, res);
        this._callback(buttonAction);
        if(buttonAction.doReturn) return false;
        
        res.writeHead(302, {
            'Location': '/' + this._parent.name
            //add other headers here...
          });
        res.end();
        return false;
    }

    render(): string {
        const funcName = `_${this._id}_click_${randomBytes(8).toString("hex")}`;
        return `
            <button onclick='${funcName}()'>${this._text}</button>
            <script>
                function ${funcName}() {
                    window.location.href = "/${this._parent.name}/click/${this._id}";
                }
            </script>
        `;
    }

    text(text?: string): string|this {
        if(text != undefined) {
            this._text = text;
            return this;
        }

        return this._text;
    }
    
    click(callback?: (action: ButtonAction) => {}): ((action: ButtonAction) => {})| this {
        if(callback != undefined) {
            this._callback = callback;
            return this;
        }

        return this._callback;

    }

}