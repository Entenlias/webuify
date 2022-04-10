import { Style } from "../Style";
import fs from "fs";

export class CustomStyle extends Style {

    private _css: string;

    constructor(file: string) {
        super();
        this._css = fs.readFileSync(file).toString();
    }

    render(): string {
        return `<style>${this._css}</style>`;
    }
    
}