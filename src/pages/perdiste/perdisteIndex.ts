import { state } from "../../state";
import perdiste_estrella from '../../imgs/resultado_perdiste.png'
export function perdisteInit(params: any) {
    const divEl = document.createElement('div');
    const vos_puntaje = 1;
    const maquina_puntaje = 2;
    divEl.innerHTML = `
    <div class="resultado__contenedor">

        <img src="${perdiste_estrella}" alt="estrella perdiste" width="255" height="260" >

        <article class="article__resultado article__perdiste">
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