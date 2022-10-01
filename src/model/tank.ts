import modelAbstract from "./modelAbstract"
import { image } from "../service/image";
import { diretionEnum } from "../enum/positionEnum"
import _ from "lodash"
import config from "../config";
import water from "../canvas/water";
import wall from "../canvas/wall";
import steel from "../canvas/steel";
//草地的类
export default class Tank extends modelAbstract implements IModel {
  name: string = "tank";
  //坦克方向
  // protected direction: diretionEnum = diretionEnum.bottom
  render(): void {
    // super.draw()
    //增加向下移动的概率
    if(_.random(20)==1){
      this.direction=diretionEnum.bottom
    }
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
  protected isTouch(x:number,y:number):boolean {
    if(x==0||x+this.width>config.canvas.width||y<0||y+this.height>config.canvas.height){
      return true
    }
    const models=[...water.models,...wall.models,...steel.models]
    return models.some((model)=>{
     const state=x+this.width<=model.x||x>=model.x+model.width||y+this.height<=model.y||y>=model.y+model.height;
     return !state
    })
    return false
  }
}
//