import config from "../config";
import CanvasAbStraw from "./canvasAbstract";


class Tank extends CanvasAbStraw {
  render(): void {
    super.drawModels(config.starw.num)
  }

}

export default new Tank()