import { IncomingMessage, ServerResponse } from "http";
import { View } from "../view/View";

export class ButtonAction {

    public _request: IncomingMessage;
    public _response: ServerResponse;
    public doReturn: boolean = false;

    constructor(request: IncomingMessage, response: ServerResponse) {
        this._request = request;
        this._response = response;
    }

    /**
     * Show an view
     * @param {View} view The view that shows
     */
    showView(view: View) {
        this._response.writeHead(302, {
            'Location': '/' + view.name
            //add other headers here...
          });
        this._response.end();
        this.doReturn = true;
    }

}