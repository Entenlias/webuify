import { Element } from "./Element";

export class LabelElement extends Element {

    private _text: string;

    render(): string {
        return "<p>" + this._text + "</p>";
    }

    /**
     * Set or get the text of the label
     * @param {string|undefined} text  
     * @returns {string|this} the string if no argument is given, or the instance
     */
    text(text?: string): string|this {
        if(text != undefined) {
            this._text = text;
            return this;
        }

        return this._text;
    }
    

}