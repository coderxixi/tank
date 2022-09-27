import modelAbstract from "./modelAbstract"
import { image } from "../service/image";
//墙的的类
export default class wall extends modelAbstract implements IModel{
  render(): void {
    const img=image.get('wall')!
    console.log('wall',img);
    super.draw(img)
  }

  
}