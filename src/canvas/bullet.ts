import config from "../config";
import model from "../model/bullet";
import CanvasAbStraw from "./canvasAbstract";
import tank from "./tank";
export default new class Bullet extends CanvasAbStraw implements ICanvas {
  num(): number {
    return 0
  }
  model(): BulletModelConstructor {
    return model
  }
  render(): void {
    // super.createModels()
    // super.renderModels()
    setTimeout(this.createBullet, 100)
  }

  //创建子弹
  createBullet() {
    tank.models.forEach((tank) => {
      const isExists = this.models.some((m) => {
        return m.tank == tank
      })

      if (!isExists) {
          this.models.push(new model(tank))
      }
    })
  }
}('bullet')

// export default new Bullet()