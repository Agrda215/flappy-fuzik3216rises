/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class ImagesPipe4Down extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./ImagesPipe4Down/costumes/costume1.svg", {
        x: 157.90690659159145,
        y: 148.88927725583494
      })
    ];

    this.sounds = [new Sound("pop", "./ImagesPipe4Down/sounds/pop.wav")];

    this.triggers = [];
  }
}
