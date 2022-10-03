import config from "../config"

import { diretionEnum } from "../enum/positionEnum"
export default  abstract class modelAbstract {
   protected  abstract name:string
  abstract render():void
  abstract image():HTMLImageElement
  public width=config.model.width;
  public height=config.model.height;
  protected direction: diretionEnum = diretionEnum.top
  abstract canvas:ICanvas
  constructor(public x:number,public y:number){
    this.randomDirection()
  }
  protected draw(){
    this.canvas.ctx.drawImage(this.image(),this.x, this.y, config.model.width, config.model.height)
  }
    //随机产生方向
  protected randomDirection() {
    this.direction = Object.keys(diretionEnum)[Math.floor(Math.random() * 4)] as diretionEnum

  }
}