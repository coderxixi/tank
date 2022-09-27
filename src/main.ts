
import "./style.scss"
import straw from  "./canvas/straw";

import { promises} from "./service/image";

async function bootstrap(){
   await Promise.all(promises) ;
   straw.render();
}

void bootstrap()


