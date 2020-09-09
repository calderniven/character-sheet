"use strict";


import { CharacterSelect } from "../components/CharacterSelect.js";
import { BaseComponent } from "../components/BaseComponent.js";
import { Player } from "../models/Player.js";
import { CharacterStat } from "../components/CharacterStat.js";

export class App {

    constructor() {

        /**
        * @type {BaseComponent[]}
        */
        this.components = [];

        /**
        * @type {Player}
        */
        this.player = Player.load();
        

        window.app = this;

        this.registerComponents();
        this.loadPlayer();
    }

    loadPlayer() {
        if (this.player == null) {
            let name = prompt("Your name, Stranger?");
            this.player = new Player(name);
            this.player.save();
        }
    }

    registerComponents() {
        CharacterSelect.register("character-select");
        CharacterStat.register("character-stat");
    }
}