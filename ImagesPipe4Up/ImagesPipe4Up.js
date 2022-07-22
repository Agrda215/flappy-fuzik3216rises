/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class ImagesPipe4Up extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./ImagesPipe4Up/costumes/costume1.svg", {
        x: 139.3561914740889,
        y: 136.31526038574464
      })
    ];

    this.sounds = [new Sound("pop", "./ImagesPipe4Up/sounds/pop.wav")];

    this.triggers = [];
  }
}
