import modelAbstract from "./modelAbstract"
import { image } from "../service/image";
//草地的类
export default class Steel extends modelAbstract implements IModel{
  name: string="steel";
  render(): void {
    const img=image.get('steel')!
    super.draw(img)
  }

  
}