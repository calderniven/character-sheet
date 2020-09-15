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
        this.element.innerHTML = `<label>${statName}</label> <input data-bind="${statName}" type="number" value=${statValue}>`;
        
        let stat = $("input", this.element);
        stat.onchange = function(event) {
            let newValue = event.target.valueAsNumber;
            let statName = event.target.attributes.getNamedItem("data-bind").value;

            Character.active().attributes[statName] = newValue;
            Player.active().save();
        }
    }
}