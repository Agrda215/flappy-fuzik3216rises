/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class ImagesPipe1Up extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./ImagesPipe1Up/costumes/costume1.svg", {
        x: 158.86069705905533,
        y: 118.9688682924726
      })
    ];

    this.sounds = [new Sound("pop", "./ImagesPipe1Up/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (this.x == -284 || this.stage.vars.score > 47) {
        this.visible = false;
      } else {
        this.visible = true;
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      this.y = this.stage.vars.pipeYup;
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    while (true) {
      this.x = this.stage.vars.pipeXup;
      yield;
    }
  }
}
