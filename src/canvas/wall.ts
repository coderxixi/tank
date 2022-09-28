import config from "../config";
import model from "../model/wall";
import CanvasAbStraw from "./canvasAbstract";


class Wall extends CanvasAbStraw {

  constructor() {
    super()

  }
  num(): number {
    return config.wall.num
  }
  model(): ModelConstructor {
    return model
  }
  render(): void {
    super.createModels()
    super.renderModels();
  
  }

}

export default new Wall()