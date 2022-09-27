import straw from "./static/images/straw/straw.png"
import wall from "./static/images/wall/wall.gif"
export default {
  canvas: {
    width: 900,
    height: 600
  },
  //模型的基本配置
  model: {
    width: 30,
    height: 30
  },
  //草地的数量
  starw:{
    num:40,
  },
  //墙的数量
  wall:{
    num:60
  },
  //游戏贴图
  images: {
    //草地的贴图
    straw: straw,
    //墙的贴图
    wall :wall
  }

}