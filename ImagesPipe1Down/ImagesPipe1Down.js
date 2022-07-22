/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class ImagesPipe1Down extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./ImagesPipe1Down/costumes/costume1.svg", {
        x: 165.4144129279279,
        y: 151.650655
      })
    ];

    this.sounds = [new Sound("pop", "./ImagesPipe1Down/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked5)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      this.y = this.stage.vars.pipeY;
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.x == -276 || this.stage.vars.score > 47) {
        this.visible = false;
      } else {
        this.visible = true;
      }
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    while (true) {
      this.x = this.stage.vars.pipeX;
      yield;
    }
  }

  *whenGreenFlagClicked4() {
    while (true) {
      yield* this.wait(9);
      if (!(this.stage.vars.score > 47)) {
        this.stage.vars.score += 1;
      }
      this.stage.vars.pipeX = 276;
      this.stage.vars.pipeXup = 284;
      yield;
    }
  }

  *whenGreenFlagClicked5() {
    while (true) {
      yield* this.wait(0.07);
      this.stage.vars.pipeX += -10;
      this.stage.vars.pipeXup += -10;
      yield;
    }
  }
}
