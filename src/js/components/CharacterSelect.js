"use strict";

import { BaseComponent } from "./BaseComponent.js";
import { App } from "../utils/App.js";
import { $ } from "../utils/helpers.js";
import { Player } from "../models/Player.js";
import { CharacterStat } from "./CharacterStat.js";

export class CharacterSelect extends BaseComponent {

    render() {
        let player = Player.active();
        let characterList = player.characters.roster;
        let characters = ""
        for (let index = 0; index < characterList.length; index++) {
            const character = characterList[index];
            let active = "";
            if (index == player.characters.activeId) {
                active = " selected"
            }
            characters += `<option value=${index}${active}>${character.name}</option>`
        }
        
        let element = `<select>${characters}</select>`;
        this.element.innerHTML = element;

        let dropDown = $("select", this.element);
        dropDown.onchange = function(selection) {
            let player = Player.active();
            player.characters.activeId = Number(selection.target.value);
            player.save();
            for (const component of window.app.components) {
                if (component instanceof CharacterStat) {
                     component.render();
                     console.log("rendered");
                }
            }
        }

    }

}