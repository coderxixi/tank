import config from "../config";
import model from "../model/water";
import CanvasAbStraw from "./canvasAbstract";
class Water extends CanvasAbStraw implements ICanvas{
  num(): number {
    return config.water.num
  }
  model(): ModelConstructor {
    return model
  }
  render(): void {
    super.createModels()
    super.renderModels()
  }
}
export default new Water("water")