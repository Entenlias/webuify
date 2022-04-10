import { View } from "../view/View";
import { ButtonElement } from "./Button";
import { LabelElement } from "./Label";

/**
 * Create an label
 * @param {View} view 
 * @param {string|undefined} text 
 * @returns {LabelElement}
 */
export function label(view: View, text?: string): LabelElement {
    let element = new LabelElement(view);
    element = element.text(text) as LabelElement;
    return element;
}

/**
 * Create an button
 * @param {View} view 
 * @param {string|undefined} text 
 * @returns {ButtonElement}
 */
export function button(view: View, text?: string): ButtonElement {
    let element = new ButtonElement(view);
    element = element.text(text) as ButtonElement;
    return element;
}