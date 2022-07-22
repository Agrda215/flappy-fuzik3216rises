/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class ImagesPipe3Down extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./ImagesPipe3Down/costumes/costume1.svg", {
        x: 152.2162100000001,
        y: 141.66567
      })
    ];

    this.sounds = [new Sound("pop", "./ImagesPipe3Down/sounds/pop.wav")];

    this.triggers = [];
  }
}
