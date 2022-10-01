import config from "../config"
import postion from "../service/postion";
export default abstract class CanvasAbStrawel implements ICanvas {
 public models: IModel[] = []
  abstract render(): void
  abstract num(): number
  abstract model(): ModelConstructor
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
  protected createModels() {
    //渲染多少个模型
    postion.getCollection(this.num()).forEach((postion) => {
      //绘制模型
      const model = this.model();
      const instance = new model(this.canvas, postion.x, postion.y);
      this.models.push(instance)
    })
  }
  //将模型渲染到画布上
  protected renderModels() {
    this.models.forEach(model => {
      model.render()
      // this.canvas.drawImage(model.image(),model.x,model.y,config.model.width,config.model.height)
    })
  }
}

