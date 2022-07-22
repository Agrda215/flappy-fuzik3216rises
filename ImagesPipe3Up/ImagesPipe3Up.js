/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class ImagesPipe3Up extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./ImagesPipe3Up/costumes/costume1.svg", {
        x: 181.67750414614204,
        y: 143.8821805523347
      })
    ];

    this.sounds = [new Sound("pop", "./ImagesPipe3Up/sounds/pop.wav")];

    this.triggers = [];
  }
}
