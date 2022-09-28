import modelAbstract from "./modelAbstract"
import { image } from "../service/image";
//草地的类
export default class Tank extends modelAbstract implements IModel{
  render(): void {
   
    const img=image.get('tank')!
    console.log('straw',img);
    
    super.draw(img)
  }

  
}