import modelAbstract from "./modelAbstract"
import { image } from "../service/image";
import { diretionEnum } from "../enum/positionEnum"
import _ from "lodash"
import config from "../config";
//草地的类
export default class Tank extends modelAbstract implements IModel {
  name: string = "tank";
  //坦克方向
  // protected direction: diretionEnum = diretionEnum.bottom
  render(): void {
    // super.draw()
    this.move()
  }
  image(): HTMLImageElement {
    let direction = this.name + _.upperFirst(this.direction)
    return image.get(direction as keyof typeof config.images)!
  }
  //让坦克运动
  protected move(): void {
    this.canvas.clearRect(this.x,this.y,config.model.width,config.model.height)
    switch (this.direction) {
      case diretionEnum.top:
        this.y --
        break
      case diretionEnum.right:
        this.x ++
        break
      case diretionEnum.bottom:
        if(this.y>config.canvas.height-config.model.height){
          this.direction=diretionEnum.bottom
          this.y--
          console.log('超出边界了');
          return
        }
        this.y ++
        break
      case diretionEnum.left:
        this.x --
        break
    }
    super.draw()
  }
}
//