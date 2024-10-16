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





  
    const piedraEl = document.querySelector('.piedra');
    const papelEl = document.querySelector('.papel');
    const tijeraEl = document.querySelector('.tijera');
    piedraEl?.addEventListener('click', ()=>{
        const oldState = state.getState();
        oldState.push('piedra');
        const newState = oldState
        state.setState(newState)
    });
    papelEl?.addEventListener('click', ()=>{
        const oldState = state.getState();
        oldState.push('papel');
        const newState = oldState
        state.setState(newState)
    });
    tijeraEl?.addEventListener('click', ()=>{
        const oldState = state.getState();
        oldState.push('tijera');
        const newState = oldState
        state.setState(newState)
    });
})();
