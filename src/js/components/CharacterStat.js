"use strict";

import { BaseComponent } from "./BaseComponent.js";
import { Character } from "../models/Character.js";
import { $ } from "../utils/helpers.js";
import { Player } from "../models/Player.js";

export class CharacterStat extends BaseComponent {
    render() {
        let statName = this.attributes.getNamedItem("data-bind").value;
        let statValue = Character.active().attributes[statName];

        this.element.innerHTML =
            `<label>${statName}</label>
        <button class="plus-button">+</button>
        <input data-bind="${statName}" type="number" value=${statValue}>
        <button class="minus-button">-</button>`;
        this.element.className = "character-stat";

        $("input", this.element).onchange = function (event) {
            CharacterStat.onStatChange(event);
        }

        $("button.plus-button", this.element).onclick = function (event) {
            CharacterStat.onButtonClick(event, +1);
        }

        $("button.minus-button", this.element).onclick = function (event) {
            CharacterStat.onButtonClick(event, -1);
        }
    }

    /**
     * Fires when stat values are changed using the CharacterStat input
     * @param {Event} event 
     */
    static onStatChange(event) {
        let newValue = event.target.valueAsNumber;
        let statName = event.target.attributes.getNamedItem("data-bind").value;

        Character.active().attributes[statName] = newValue;
        Player.active().save();
    }

    /**
     * @param {Event} event 
     * @param {Number} number 
     */
    static onButtonClick(event, number) {
        let input = $("input", event.target.parentNode);
        input.value = Number(input.value) + number;
        input.onchange({ target: input });
    }
}