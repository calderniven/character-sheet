"use strict";

import { BaseComponent } from "./BaseComponent.js";
import { App } from "../utils/App.js";
import { $ } from "../utils/helpers.js";

export class CharacterSelect extends BaseComponent {

    render() {
        let player = window.app.player
        let characterList = player.characters.roster;
        let characters = ""
        for (let index = 0; index < characterList.length; index++) {
            const character = characterList[index];
            characters += `<option value=${index}>${character.name}</option>`
        }
        
        let element = `<select>${characters}</select>`;
        this.element.innerHTML = element;

        let dropDown = $("select", this.element);
        dropDown.onchange = function(selection) {
            window.app.player.characters.active = Number(selection.target.value);
        }

    }

}