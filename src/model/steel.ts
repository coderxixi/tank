import modelAbstract from "./modelAbstract"
import { image } from "../service/image";
//草地的类
export default class Steel extends modelAbstract implements IModel{
  image(): HTMLImageElement{
   return image.get('steel')!
  }
  name: string="steel";
  render(): void {
  
    super.draw()
  }

  
}