import config from "../config"
import imgUrl from "../static/images/straw/straw.png"
export default abstract class  CanvasAbStraw {
  protected items=[]
  constructor(
    protected app=document.querySelector('#app') as HTMLDivElement,
    protected el = document.createElement('canvas'),
    protected canvas = el.getContext('2d')!
  ) {
    this.createCanvas()
    this.drawModels();
  }
  //创建画布
  protected createCanvas(){
    this.el.width = config.canvas.width;
    this.el.height = config.canvas.height;
    this.canvas.fillRect(0,0,config.canvas.width,config.canvas.height)
    this.app.insertAdjacentElement('afterbegin',this.el)
  }
  //绘制模型
  protected drawModels(){
    const img=document.createElement('img');
    img.src=imgUrl;
    img.onload=()=>{
      this.canvas.drawImage(img,0,0,50,50)
    }
   
  }
}

