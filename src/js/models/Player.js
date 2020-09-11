"use strict";

import { Character } from "./Character.js";

export class Player {
    constructor(name) {
        this.name = name;
        this.characters = {
            /**
             * @type {Number}
             */
            activeId: null,

            /**
             * @type {Character[]}
             */
            roster: [],
        }
        if (this.characters.roster.length == 0) {
            this.characters.roster.push(new Character("Anonymous"));
            this.characters.activeId = 0;
        }
    }

    /**
     * @returns {Player|null}
     */
    static active() {
        return window.app.player;
    }

    static load() {
        let object = JSON.parse(localStorage.getItem("Player"));
        if (object == null) {
            return null
        }
        let player = Player.loadFromObject(object);
        return player;
    }

    save() {
        localStorage.setItem("Player", JSON.stringify(this));
    }

    static loadFromObject(object) {
        let player = new Player(object.name);
        player.characters.activeId = object.characters.activeId;
        
        player.characters.roster = this.loadCharacters(object.characters.roster);
        return player;
    }

    static loadCharacters(rosterObjects) {
        let roster = [];
        for (const object of rosterObjects) {
            let character = new Character(object.name);
            character.attributes = object.attributes;
            character.traits = object.traits;
            roster.push(character);
        }
        return roster;
    }
}