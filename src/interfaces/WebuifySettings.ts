import { Style } from "../view/Style";

export interface WebuifySettings {

    httpPort: number,
    style: Style,
    https?: false,
    httpsPort?: number

}