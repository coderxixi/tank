import config from "../config";
import model from "../model/wall";
import CanvasAbStraw from "./canvasAbstract";


class Wall extends CanvasAbStraw  {
constructor(){
  super()
  super.createModels(config.wall.num,model)
}
  render(): void {
   super.renderModels()
  }

}

export default new Wall()