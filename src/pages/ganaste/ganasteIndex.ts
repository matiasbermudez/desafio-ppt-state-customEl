import { state } from "../../state";
import ganaste_estrella from '../../imgs/resultado_ganaste.png'
export function ganasteInit(params: any) {
    const divEl = document.createElement('div');
    const vos_puntaje = 1;
    const maquina_puntaje = 2;
    divEl.innerHTML = `
    <div class="resultado__contenedor">

        <img src="${ganaste_estrella}" alt="estrella ganaste" width="255" height="260" >

        <article class="article__resultado article__ganaste">
            <h2 class="article__score">Score</h2>
            <h3 class="article__vos">Vos: ${vos_puntaje}</h3>
            <h3 class="article__maquina">Maquina: ${maquina_puntaje}</h3>
         </article>
        <boton-azul-el class="boton__jugar">Volver a Jugar</boton-azul-el>
    </div>
    `
    const jugarEl = divEl.querySelector('.boton__jugar');
    jugarEl?.addEventListener('click', ()=>{
        params.goTo('/jugar')
    } )
    
    return divEl
}