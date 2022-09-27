import config from "../config";
import straw from "../model/straw";
import CanvasAbStraw from "./canvasAbstract";


class Straw extends CanvasAbStraw {
  render(): void {
   super.drawModels(config.starw.num,straw)
  }

}

export default new Straw()