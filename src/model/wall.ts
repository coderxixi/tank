import modelAbstract from "./modelAbstract"
import { image } from "../service/image";
//墙的的类
export default class Wall extends modelAbstract implements IModel{
  name: string="Wall";
  render(): void {
    const img=image.get('wall')!
    console.log('wall',img);
    super.draw(img)
  }

  
}