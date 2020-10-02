"use strict";

import { BaseComponent } from "./BaseComponent.js";
import { Character } from "../models/Character.js";
import { $ } from "../utils/helpers.js";
import { Player } from "../models/Player.js";

export class CharacterStat extends BaseComponent {
    render() {
        let statName = this.attributes.getNamedItem("data-bind").value;
        let character = Character.active();
        let statValue = character.attributes[statName];
        this.element.innerHTML =
            `<label>${statName}</label>
        <button class="plus-button">+</button>
        <input data-bind="${statName}" type="number" value=${statValue}>
        <button class="minus-button">-</button>`;
        this.element.className = "character-stat";

        let stat = $("input", this.element);
        stat.onchange = function (event) {
            let newValue = event.target.valueAsNumber;
            let statName = event.target.attributes.getNamedItem("data-bind").value;

            Character.active().attributes[statName] = newValue;
            Player.active().save();
        }

        $("button.plus-button", this.element).onclick = function (event) {
            CharacterStat.onButtonClick(event, +1);
        }

        $("button.minus-button", this.element).onclick = function (event) {
            CharacterStat.onButtonClick(event, -1);
        }
    }

    static onButtonClick(event, number) {
        let input = $("input", event.target.parentNode);
        input.value = Number(input.value) + number;
        input.onchange({ target: input });
    }
}