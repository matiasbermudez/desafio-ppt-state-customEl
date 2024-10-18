import { initRouter } from "./routes";
import { state } from "./state";

import { textContentInit } from "./components/text-content";
import { botonesPptInit } from "./components/botones-ppt";
import { botonAzulInit } from "./components/boton-azul";




(function main(){
    
    const rootEl = document.querySelector('#root');
    const posibleNullEl = document.createElement('div');
    posibleNullEl.innerText = " No se cargo el rootEl"

    initRouter(rootEl || posibleNullEl )
    textContentInit();
    botonesPptInit();
    botonAzulInit();


})();
