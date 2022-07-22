import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Main from "./Main/Main.js";
import ImagesPipes from "./ImagesPipes/ImagesPipes.js";
import ImagesPipe1Down from "./ImagesPipe1Down/ImagesPipe1Down.js";
import ImagesPipe1Up from "./ImagesPipe1Up/ImagesPipe1Up.js";
import ImagesPipe2Down from "./ImagesPipe2Down/ImagesPipe2Down.js";
import ImagesPipe2Up from "./ImagesPipe2Up/ImagesPipe2Up.js";
import ImagesPipe3Down from "./ImagesPipe3Down/ImagesPipe3Down.js";
import ImagesPipe3Up from "./ImagesPipe3Up/ImagesPipe3Up.js";
import ImagesPipe4Down from "./ImagesPipe4Down/ImagesPipe4Down.js";
import ImagesPipe4Up from "./ImagesPipe4Up/ImagesPipe4Up.js";
import Sprite1 from "./Sprite1/Sprite1.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Main: new Main({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  ImagesPipes: new ImagesPipes({
    x: 36,
    y: 28,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  ImagesPipe1Down: new ImagesPipe1Down({
    x: 176,
    y: 123,
    direction: 90,
    costumeNumber: 1,
    size: 40,
    visible: true
  }),
  ImagesPipe1Up: new ImagesPipe1Up({
    x: 184,
    y: -112,
    direction: 90,
    costumeNumber: 1,
    size: 40,
    visible: true
  }),
  ImagesPipe2Down: new ImagesPipe2Down({
    x: 36,
    y: 28,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  ImagesPipe2Up: new ImagesPipe2Up({
    x: 36,
    y: 28,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  ImagesPipe3Down: new ImagesPipe3Down({
    x: 36,
    y: 28,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  ImagesPipe3Up: new ImagesPipe3Up({
    x: 36,
    y: 28,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  ImagesPipe4Down: new ImagesPipe4Down({
    x: 36,
    y: 28,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  ImagesPipe4Up: new ImagesPipe4Up({
    x: 36,
    y: 28,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  Sprite1: new Sprite1({
    x: -140,
    y: -115,
    direction: 90,
    costumeNumber: 1,
    size: 36,
    visible: true
  })
};

const project = new Project(stage, sprites);
export default project;
