"use strict";

import { $$ } from "./utils/helpers.js";
import { BaseComponent } from "./components/BaseComponent.js";
import { CharacterSelect } from "./components/CharacterSelect.js";

/**
 * @var {Array.<BaseComponent>}
 */
window.components = [];

CharacterSelect.register("character-select");