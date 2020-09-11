"use strict";

import { Player } from "./Player.js";

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
    
    /**
     * @returns {Character}
     */
    static active() {
        let player = Player.active();
        console.log(player);
        let index = player.characters.activeId;
        return player.characters.roster[index];
    }
}