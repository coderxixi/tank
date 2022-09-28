
import "./style.scss"
import straw from  "./canvas/straw";
import wall from "./canvas/wall";
import water from "./canvas/water";
import steel from "./canvas/steel";
import tank from "./canvas/tank"
import { promises} from "./service/image";
import config from "./config";

const app=document.querySelector<HTMLDivElement>('#app')!;
app.style.width=config.canvas.width+'px';
app.style.height=config.canvas.height+'px';
async function bootstrap(){
   await Promise.all(promises) ;
   //绘制草体
   wall.render();
   //绘制墙体
   straw.render();
   //绘制水体
   water.render()
   steel.render()
   tank.render()
}

void bootstrap()


