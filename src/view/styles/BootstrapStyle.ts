import { Style } from "../Style";

export class BootstrapStyle extends Style {

    render(): string {
        return `
        <link rel="stylesheet" href="https://classless.de/classless.css">
        `;
    }
    
}