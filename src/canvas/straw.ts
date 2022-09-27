import config from "../config";
import CanvasAbStraw from "./canvasAbstract";


class Straw extends CanvasAbStraw {
  render(): void {
   super.drawModels(config.starw.num)
  }

}

export default new Straw()