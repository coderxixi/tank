import config from "../config";
import model from "../model/tank";
import CanvasAbStraw from "./canvasAbstract";
import position from "../service/postion"


class Tank extends CanvasAbStraw implements ICanvas{

  constructor() {
    super()

  }
  num(): number {
    return config.tank.num
  }
  model(): ModelConstructor {
    return model
  }
  render(): void {
    this.createModels()
    this.renderModels();
    setInterval(()=>{
      this.renderModels();
    },100)
  }
protected renderModels(){
  this.canvas.clearRect(0,0,config.model.width,config.model.height)
  this.models.forEach(model => {
  console.log("model",model.image());
    model.render()
    this.canvas.drawImage(model.image(),model.x,model.y,config.model.width,config.model.height)
  })
}

  //绘制模型
  protected createModels() {
    //渲染多少个模型
    for(let i=0;i<this.num();i++){
        //绘制模型
        const pos=position.postion()
        const model = this.model();
        const instance = new model(this.canvas,pos.x, 0);
  
        this.models.push(instance)
    }
    
  }
}

export default new Tank()