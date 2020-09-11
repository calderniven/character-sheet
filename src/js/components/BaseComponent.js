"use strict";

import { $$ } from "../utils/helpers.js";

export class BaseComponent {

    constructor(element, original) {
        this.element = element;
        this.attributes = original.attributes;
        this.render();
    }

    static register(selector) {

        let elements = $$(selector);

        for (const match of elements) {
            let element = document.createElement("div");
            match.replaceWith(element);
            let component = new this(element, match);
            window.app.components.push(component);
        }
    }

    render() {
        this.element.innerHTML = "this is a base component";
    }
}