import { botonAzulInit } from "../../components/boton-azul";
import { botonesPptInit } from "../../components/botones-ppt";
import { textContentInit } from "../../components/text-content";
import { state } from "../../state";

export function welcomeInit(params) {
    const divEl = document.createElement('div');
    const texto1 = "Soy un texto h2";
    const texto2 = "Pero ahora cambie"
    divEl.innerHTML = `
    <div class="welcome__contenedor">
     <div class="welcome__titulo">
        <h2>Piedra</h2>
        <h2>Papel ó</h2>
        <h2>Tijera</h2>
    </div>
        <boton-azul-el class="boton__principal">Empezar</boton-azul-el>
       
    </div>
    `

    const empezarEl = divEl.querySelector('.boton__principal');
    
    empezarEl?.addEventListener('click', ()=>{
        console.log("empezarEl desde page  ")
        params.goTo('/explicacion')
    })
    return divEl
}