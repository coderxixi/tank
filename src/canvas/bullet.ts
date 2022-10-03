import config from "../config";
import model from "../model/bullet";
import CanvasAbStraw from "./canvasAbstract";
 export default new class Bullet extends CanvasAbStraw implements ICanvas {
  num(): number {
     return 0
  }
  model(): ModelConstructor {
    return model
  }
  render(): void {
    super.createModels()
    super.renderModels()
  }
}('bullet')

// export default new Bullet()