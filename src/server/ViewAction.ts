import { IncomingMessage, ServerResponse } from "http";
import { View } from "../view/View";
import { CookieManager } from "./CookieManager";

export class ViewAction {

    private _request: IncomingMessage;
    private _response: ServerResponse;
    private _cookieManager: CookieManager;
    public doReturn: boolean = false;

    constructor(request: IncomingMessage, response: ServerResponse) {
        this._request = request;
        this._response = response;
        this._cookieManager = new CookieManager(request, response);
    }

    /**
     * Get the cookie manager for the user variables.
     * @returns {CookieManager} The cookie manager
     */
    userVariables(): CookieManager {
        return this._cookieManager;
    }

}