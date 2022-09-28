import modelAbstract from "./modelAbstract"
import { image } from "../service/image";
import { diretionEnum } from "../enum/positionEnum"
import _ from "lodash"
import config from "../config";
//草地的类
export default class Tank extends modelAbstract implements IModel {
  name: string="tank";
  //坦克方向
  protected direction: diretionEnum = diretionEnum.bottom

  render(): void {
    this.randomDirection()
    // const img=image.get('tank')!
    super.draw(this.randomImage())
  }
  //随机产生方向
  randomDirection() {
    this.direction = Object.keys(diretionEnum)[Math.floor(Math.random() * 4)] as diretionEnum

  }
  randomImage() {
    let direction = this.name + _.upperFirst(this.direction)
    return image.get(direction as keyof typeof config.images)!
  }
}