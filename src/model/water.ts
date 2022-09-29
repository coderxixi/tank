import modelAbstract from "./modelAbstract"
import { image } from "../service/image";
//墙的的类
export default class Water extends modelAbstract implements IModel{
  image(): HTMLImageElement {
   return image.get('water')!
  }
  name: string="Water";
  render(): void {
    super.draw()
  }
}