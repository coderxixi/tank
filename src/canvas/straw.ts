import config from "../config";
import model from "../model/straw";
import CanvasAbStraw from "./canvasAbstract";
class Straw extends CanvasAbStraw implements ICanvas {

  constructor() {
    super()

  }
  num(): number {
    return config.starw.num
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