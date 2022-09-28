import config from "../config";
import model from "../model/water";
import CanvasAbStraw from "./canvasAbstract";


class Wall extends CanvasAbStraw  {
constructor(){
  super()
  super.createModels(config.water.num,model)
}
  render(): void {
   super.renderModels()
  }

}

export default new Wall()