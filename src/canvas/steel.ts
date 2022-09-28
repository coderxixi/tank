import config from "../config";
import model from "../model/steel";
import CanvasAbStraw from "./canvasAbstract";


class Straw extends CanvasAbStraw  {
constructor(){
  super()
  super.createModels(config.starw.num,model)
}
  render(): void {
   super.renderModels()
  }

}

export default new Straw()