import straw from "./static/images/straw/straw.png"
import wall from "./static/images/wall/wall.gif"
import water from "./static/images/water/water.gif"
import steel from "./static/images/wall/steels.gif"
import tankTop from "./static/images/tank/top.gif"
import tankBottom from "./static/images/tank/bottom.gif"
import tankLeft from "./static/images/tank/left.gif"
import tankRight from "./static/images/tank/right.gif"
export default {
  timeout:10,
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
  starw: {
    num: 60,
  },
  //墙的数量
  wall: {
    num: 60
  },
  //水的数量
  water: {
    num: 66
  },
  //敌方坦克数量
  tank: {
    num: 60
  },
  //白色墙体
  steel: {
    num: 60
  },
  //游戏贴图
  images: {
    //草地的贴图
    straw: straw,
    //墙的贴图
    wall: wall,
    //水的贴图
    water: water,
    //白色墙体的贴图
    steel: steel,
    //坦克贴图
    tankTop,
    tankBottom,
    tankLeft,
    tankRight
  }

}