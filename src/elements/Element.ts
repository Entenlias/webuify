import {randomBytes} from "crypto";
import { ClientRequest, IncomingMessage, ServerResponse } from "http";
import { View } from "../view/View";

export abstract class Element {
    
    public _parent: View;
    public _id: string = randomBytes(16).toString("hex");

    constructor(parent: View) {
        this._parent = parent;
    }

    abstract render(): string;
    
    middleware(req: IncomingMessage, res: ServerResponse): boolean {
        return true;
    }

    id(id?: string): string|this {
        if(id != undefined) {
            this._id = id;
            return this;
        }

        return this._id;
    }

}