"use strict";

export class Character {
    constructor(name) {
        this.name = name;

        this.attributes = {
            mind        : 1,
            body        : 1,
            will        : 1,
        }

        this.traits = {
            focus       : 1,
            instinct    : 1,
            wits        : 1,
        }
    }
}