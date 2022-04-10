import { Element } from "../elements/Element";
import { ViewSettings } from "../interfaces/ViewSettings";
import { ViewAction } from "../server/ViewAction";
import { Webuify } from "../server/Webuify";

export class View {

    private _parent: Webuify;
    public name: string;
    public settings: ViewSettings;
    public elements: Element[] = [];

    private _onload: (() => void) = () => { };
    private _onpreload: ((action: ViewAction, oldView: View) => View) = () => { return null };

    /**
     * 
     * @param {Webuify} parent The webuify-instance, that this view belongs to
     * @param {string} name The name of this view. This needs to be unique
     * @param {ViewSettings} settings The settings of this view.
     */
    constructor(parent: Webuify, name: string, settings: ViewSettings) {
        this._parent = parent;
        this.name = name;
        this.settings = settings;
    }

    /**
     * Render the view as HTML
     * @returns {string} the rendered HTML
     */
    render(): string {
        let str = "";
        for (const element of this.elements) {
            str += element.render();
        }
        return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${this.settings.title}</title>

            ${this._parent.settings.style.render()}
        </head>
        <body>
            ${str}
        </body>
        </html>`;
    }

    /**
     * Finds an element by its ID
     * @param {string} id 
     * @returns {Element|null} the found Element, or null if no element is found
     */
    element(id: string): Element | null {
        for (let element of this.elements) {
            if (element.id() == id) {
                return element;
            }
        }
        return null;
    }

    /**
     * Set or get the function, that gets called on load of the view
     * @param {() => void} callback
     * @returns {(() => void)| this} the function, or the current instance if an argument is given
     */
    onload(callback?: () => void): (() => void) | this {
        if (callback != undefined) {
            this._onload = callback;
            return this;
        }

        return this._onload;

    }

    /**
     * Set or get the function, that gets called before load of the view
     * @param {() => void} callback
     * @returns {(() => void)| this} the function, or the current instance if an argument is given
     */
    onpreload(callback?: (action: ViewAction, oldView: View) => View): ((action: ViewAction, oldView: View) => View) | this {
        if (callback != undefined) {
            this._onpreload = callback;
            return this;
        }

        return this._onpreload;

    }

    /**
     * Add an element as an child
     * @param {Element} element The element that gets added as an child
     */
    add(element: Element) {
        this.elements.push(element);
    }


}