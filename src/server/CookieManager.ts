import { IncomingMessage, ServerResponse } from "http";
import { View } from "../view/View";

export class CookieManager {

    public _request: IncomingMessage;
    public _response: ServerResponse;
    public doReturn: boolean = false;
    public cookiesToSet: any = {};

    constructor(request: IncomingMessage, response: ServerResponse) {
        this._request = request;
        this._response = response;
    }

    /**
     * Get an cookie
     * @param {string} cookie 
     */
    get(cookie: string): any {
        console.log(this._request.headers.cookie);
    }

    /**
     * Set an cookie
     * @param {string} cookie 
     * @param {any} value 
     */
    set(cookie: string, value: any) {
        this.cookiesToSet[cookie] = value;
    }
    

}