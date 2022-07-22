/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class ImagesPipe2Down extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./ImagesPipe2Down/costumes/costume1.svg", {
        x: 156.34834999999998,
        y: 160.65065099099098
      })
    ];

    this.sounds = [new Sound("pop", "./ImagesPipe2Down/sounds/pop.wav")];

    this.triggers = [];
  }
}
