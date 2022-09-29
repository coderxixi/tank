import modelAbstract from "./modelAbstract"
import { image } from "../service/image";
//草地的类
export default class straw extends modelAbstract implements IModel{
  image(): HTMLImageElement {
    return  image.get('straw')!
  }
  name:string="straw";
  render(): void {
    super.draw()
  }
}