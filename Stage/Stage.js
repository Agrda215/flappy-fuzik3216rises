/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("BG-Base", "./Stage/costumes/BG-Base.svg", {
        x: 269.018018018018,
        y: 196.6957109697588
      }),
      new Costume("BG-Dark", "./Stage/costumes/BG-Dark.svg", {
        x: 269.018018018018,
        y: 196.69571096975884
      })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenstageclicked)
    ];

    this.vars.score = 2;
    this.vars.playerX = -140;
    this.vars.playerY = -115;
    this.vars.pipeX = 176;
    this.vars.pipeY = 123;
    this.vars.highscore = 0;
    this.vars.pipeXup = 184;
    this.vars.pipeYup = -112;
    this.vars.playerSize = 36;
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (this.vars.score > 299) {
        this.costume = "BG-Dark";
      } else {
        this.costume = "BG-Base";
      }
      yield;
    }
  }

  *whenstageclicked() {
    this.vars.playerY += 20;
  }
}
