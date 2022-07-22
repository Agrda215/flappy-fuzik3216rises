/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class ImagesPipes extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./ImagesPipes/costumes/costume1.svg", {
        x: 245.94778145315385,
        y: 156.66567100600597
      })
    ];

    this.sounds = [new Sound("pop", "./ImagesPipes/sounds/pop.wav")];

    this.triggers = [];
  }
}
