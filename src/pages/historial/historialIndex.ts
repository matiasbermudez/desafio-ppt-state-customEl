import { state } from "../../state";

export function historialInit(params : any){

    const divEl = document.createElement('div');
    const estado = state.getState();
    divEl.innerHTML = `
    <div class="contenedor__historial">
        <table class="tabla">
            <tr class="tabla__tr">
                <td class="tabla__td">Jugador</td>
                <td class="tabla__td">Maquina</td>
                <td class="tabla__td">Resultado</td>
            </tr>
            ${estado.map( jugada =>`
            <tr class="tabla__tr">
                <td class="tabla__td">${jugada.jugador}</td>
                <td class="tabla__td">${jugada.maquina}</td>
                <td class="tabla__td">${jugada.ganador}</td>
            </tr>
        `).join('')}
        </table>
        
        <boton-azul-el class="boton__jugar">Volver a Jugar</boton-azul-el>

    </div>
    `


    const jugarEl = divEl.querySelector('.boton__jugar');
    jugarEl?.addEventListener('click', ()=>{
        params.goTo('/jugar')
    } )

    return divEl
}