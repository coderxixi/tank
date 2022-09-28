import modelAbstract from "./modelAbstract"
import { image } from "../service/image";
import { diretionEnum } from "../enum/positionEnum"
import _ from "lodash"
import config from "../config";
//草地的类
export default class Tank extends modelAbstract implements IModel {
  name: string = "tank";
  //坦克方向
  protected direction: diretionEnum = diretionEnum.bottom

  render(): void {
    this.randomDirection()
    // const img=image.get('tank')!
    super.draw(this.randomImage())
    setInterval(() => {
      this.move()
    }, 50)
  }
  //随机产生方向
  randomDirection() {
    this.direction = Object.keys(diretionEnum)[Math.floor(Math.random() * 4)] as diretionEnum

  }
  //让坦克运动
  protected move(): void {
    this.canvas.clearRect(this.x,this.y,config.model.width,config.model.height)
    switch (this.direction) {
      case diretionEnum.top:
        this.y += 2
        break
      case diretionEnum.right:
        this.x += 2
        break
      case diretionEnum.bottom:
        this.y -= 2
        break
      case diretionEnum.left:
        this.x -= 2
        break
    }
    super.draw(this.randomImage())

  }
  randomImage() {
    let direction = this.name + _.upperFirst(this.direction)
    return image.get(direction as keyof typeof config.images)!
  }
}