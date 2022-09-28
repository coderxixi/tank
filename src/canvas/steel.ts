import config from "../config";
import model from "../model/steel";
import CanvasAbStraw from "./canvasAbstract";


class Straw extends CanvasAbStraw {
  constructor() {
    super()
  }
  num(): number {
     return config.steel.num
  }
  model(): ModelConstructor {
    return model
  }

  render(): void {
    super.createModels()
    super.renderModels()
  }

}

export default new Straw()