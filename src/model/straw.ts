import modelAbstract from "./modelAbstract"
import { image } from "../service/image";
import straw from "../canvas/straw"
//草地的类
export default class Straw extends modelAbstract implements IModel{
  canvas: ICanvas=straw;
  image(): HTMLImageElement {
    return  image.get('straw')!
  }
  name:string="straw";
  render(): void {
    super.draw()
  }
}