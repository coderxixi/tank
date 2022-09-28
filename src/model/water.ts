import modelAbstract from "./modelAbstract"
import { image } from "../service/image";
//墙的的类
export default class Water extends modelAbstract implements IModel{
  name: string="Water";
  render(): void {
    const img=image.get('water')!
    console.log('water',img);
    super.draw(img)
  }

  
}