"use strict";

import { Character } from "./Character.js";

export class Player {
    constructor(name) {
        this.name = name;
        this.characters = {
            /**
             * @type {Number}
             */
            active: null,

            /**
             * @type {Character[]}
             */
            roster: [],
        }
        if (this.characters.roster.length == 0) {
            this.characters.roster.push(new Character("character name"));
            this.characters.roster.active = 0
        }
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
        player.characters.active = object.characters.active;
        
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