import modelAbstract from "./modelAbstract"
import { image } from "../service/image";
//墙的的类
export default class Wall extends modelAbstract implements IModel{
  image(): HTMLImageElement {
    return image.get('wall')!
  }
  name: string="Wall";
  render(): void {
    super.draw()
  }
}