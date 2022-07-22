/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Main extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Main/costumes/costume1.svg", { x: 0, y: 0 }),
      new Costume("costume2", "./Main/costumes/costume2.svg", { x: 46, y: 53 })
    ];

    this.sounds = [new Sound("Meow", "./Main/sounds/Meow.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3)
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.vars.score = 0;
    this.stage.vars.highscore = 0;
    this.stage.vars.playerX = -140;
    this.stage.vars.playerY = 0;
    this.stage.vars.pipeX = -276;
    this.stage.vars.pipeY = 123;
    this.stage.vars.pipeXup = -284;
    this.stage.vars.pipeYup = -112;
    this.stage.vars.playerSize = 36;
    this.stage.vars.highscore = 0;
  }

  *whenGreenFlagClicked2() {
    while (true) {
      yield* this.wait(0.1);
      this.stage.vars.playerY += -15;
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    while (true) {
      this.effects.color = 0;
      /* TODO: Implement data_showvariable */ null;
      yield;
    }
  }
}
