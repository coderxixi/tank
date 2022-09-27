
import config from "../config"
type positionType={x:number,y:number}
class  position{
  collection:positionType[]=[]
   //批量获取唯一坐标
   public getCollection(num: number) {
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
          this.collection.push(postion)
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
      y: Math.floor(Math.random() * (config.canvas.height / config.model.height)-5) * config.model.height+config.model.height*2,
    }
  }
}


export default new position()