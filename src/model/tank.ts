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
   
    this.canvas.clearRect(this.x, this.y, config.model.width, config.model.height)
    while(true){
      let x = this.x;
      let y = this.y;
      switch (this.direction) {
        case diretionEnum.top:
          y--
          break
        case diretionEnum.right:
          x++
          break
        case diretionEnum.bottom:
          y++
          break
        case diretionEnum.left:
          x--
          break
      }
      if(this.isTouch(x,y)===true){
        this.randomDirection()
      }else{
        this.x=x;
        this.y=y;
        break
      }
    }
   
    super.draw()
  }
  //碰撞检测
  protected isTouch(x:number,y:number) {
    if(x==0||x+this.width>config.canvas.width||y<0||y+this.height>config.canvas.height){
      return true
    }
  }
}
//