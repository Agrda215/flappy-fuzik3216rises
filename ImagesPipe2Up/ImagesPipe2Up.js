/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class ImagesPipe2Up extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./ImagesPipe2Up/costumes/costume1.svg", {
        x: 159.45295112157527,
        y: 150.5159621141342
      })
    ];

    this.sounds = [new Sound("pop", "./ImagesPipe2Up/sounds/pop.wav")];

    this.triggers = [];
  }
}
