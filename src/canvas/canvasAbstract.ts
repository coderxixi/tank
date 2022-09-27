import config from "../config"
import { image } from "../service/image";
export default abstract class CanvasAbStraw {
  protected items = []
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
    this.canvas.fillStyle = "#333"
    this.canvas.fillRect(0, 0, config.canvas.width, config.canvas.height)
    this.app.insertAdjacentElement('afterbegin', this.el)
  }
  //绘制模型
  protected drawModels(num: number,model:any) {
    //渲染多少个模型
    this.positionCollection(num).forEach((postion) => {
      //绘制模型
      new model(this.canvas,postion.x,postion.y)
    })
  }
  //批量获取唯一坐标
  protected positionCollection(num: number) {
    //集合
    const collection = [] as { x: number, y: number }[];
    for (let i = 0; i < num; i++) {


      while (true) {
        const postion = this.postion();
        const exists = collection.some((c) => {
          return c.x == postion.x && c.y == postion.y
        })

        if (!exists) {
          collection.push(postion)
          break
        }

      }

    }

    return collection
  }
  //草地的随机位置
  protected postion() {
    return {
      x: Math.floor(Math.random() * (config.canvas.width / config.model.width)) * config.model.width,
      y: Math.floor(Math.random() * (config.canvas.height / config.model.height)) * config.model.height,
    }
  }
}

