import { state } from "../../state";

export function jugadaInit(params : any){
    
    
    const divEl = document.createElement('div');
  
    divEl.innerHTML = `
        <botones-ppt-el ppt="${state.setMaquinaPlay()}" class="welcome__botones-ppt LaMaquina "></botones-ppt-el>
        <boton-azul-el class="boton__principal">Volver a jugar</boton-azul-el>
  
   
    `

    const empezarEl = divEl.querySelector('.boton__principal');
    
    empezarEl?.addEventListener('click', ()=>{
        console.log("empezarEl desde page  ")
        params.goTo('/jugar')
    })
    return divEl
}