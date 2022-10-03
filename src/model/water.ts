import modelAbstract from "./modelAbstract"
import { image } from "../service/image";
import water from "../canvas/water";
//墙的的类
export default class Water extends modelAbstract implements IModel{
  canvas: ICanvas=water;
  image(): HTMLImageElement {
   return image.get('water')!
  }
  name: string="Water";
  render(): void {
    super.draw()
  }
}