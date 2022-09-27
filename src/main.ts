
import "./style.scss"
import straw from  "./canvas/straw";
import wall from "./canvas/wall"
import { promises} from "./service/image";
import config from "./config";

const app=document.querySelector<HTMLDivElement>('#app')!;
app.style.width=config.canvas.width+'px';
app.style.height=config.canvas.height+'px';
async function bootstrap(){
   await Promise.all(promises) ;
   wall.render();
   straw.render();
  
   
}

void bootstrap()


