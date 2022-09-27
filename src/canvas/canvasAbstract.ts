import config from "../config"
import postion from "../service/postion";
export default abstract class CanvasAbStrawel{
  protected models:IModel[] = []
  abstract render(): void
  constructor(
    protected app = document.querySelector('#app') as HTMLDivElement,
    protected el = document.createElement('canvas'),
    protected canvas = el.getContext('2d')!
    
  ) {
    this.createCanvas()
    
  }
  //创建画布
  protected createCanvas() {
    this.el.width = config.canvas.width;
    this.el.height = config.canvas.height;
    this.app.insertAdjacentElement('afterbegin', this.el)
  }
  //绘制模型
  protected createModels(num: number,model:ModelConstructor) {
    //渲染多少个模型
    postion.getCollection(num).forEach((postion) => {
      //绘制模型
   const instance= new model(this.canvas,postion.x,postion.y);

   this.models.push(instance)
   
    })
  }
 protected renderModels() {
  this.models.forEach(model=>model.render())
 }
}

