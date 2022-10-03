import modelAbstract from "./modelAbstract"
import { image } from "../service/image";
import wall from "../canvas/wall";
//墙的的类
export default class Wall extends modelAbstract implements IModel{
   canvas: ICanvas=wall;
  image(): HTMLImageElement {
    return image.get('wall')!
  }
  name: string="Wall";
  render(): void {
    super.draw()
  }
}