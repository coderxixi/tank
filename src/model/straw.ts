import modelAbstract from "./modelAbstract"
import { image } from "../service/image";
//草地的类
export default class straw extends modelAbstract implements IModel{
  name:string="straw";
  render(): void {
   
    const img=image.get('straw')!
    console.log('straw',img);
    
    super.draw(img)
  }

  
}