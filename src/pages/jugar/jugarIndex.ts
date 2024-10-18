
import { state } from "../../state";

export function jugarInit(params:any){
    const todosLosBotones = document.querySelectorAll('.welcome__botones-ppt');
    todosLosBotones.forEach((element) =>{
        element.classList.remove('SelectedOff')
        console.log(element)
    })
    const piedraEl = document.querySelector('.piedra');
    const papelEl = document.querySelector('.papel');
    const tijeraEl = document.querySelector('.tijera');
    // console.log(tijeraEl)
    // tijeraEl?.classList.remove('SelectedOff');
    // piedraEl?.classList.remove('SelectedOff');
    // papelEl?.classList.remove('SelectedOff');
    
   let counter = 3;
 
    
    const divEl = document.createElement('div');
  
    divEl.innerHTML = `
         <div id="countdown" class="countdown-circle">${counter}</div>
    `
    let hizoLaJugada = false;
    function countDownTry (){
         const intervalId = setInterval(()=>{
            counter--;
            const countdownElement = divEl.querySelector('.countdown-circle'); 
            
         if (countdownElement) {
            //LE HAGO TO STRING POR QUE EL TEXTCONTENT NO ADMITE NUMBERS, SOLO STRING
            countdownElement.textContent = counter.toString();
        }
        //SI EL CONTADOR LLEGA A 0 CORTO EL INTERVAL CON CLEARINTERVAL Y EL NOMBRE DEL INTERVAL
        
             if(counter <= 0 && hizoLaJugada ){
                 clearInterval(intervalId);
                 params.goTo('/jugada')
             }else if (counter == 0){
                alert('No realizaste la jugada, volvemos a iniciar');
                counter = 4;
             }
         }, 1000);
     };
     countDownTry ()
    

    //ONCLICK SETEO EL STATE, HIZOLAJUGADA SERA TRUE PARA QUE TE REDIRECCIONE Y LE ASIGNO A LOS DOS NO SELECTED LA CLASE SELECTEDOFF
    piedraEl?.addEventListener('click', ()=>{
       
        const oldState = state.getState();
        oldState.push('piedra');
        const newState = oldState
        state.setState(newState)

        //LUEGO DE LA SELECCION
        hizoLaJugada = true;
        papelEl?.classList.add('SelectedOff');
        tijeraEl?.classList.add('SelectedOff');
    });
    papelEl?.addEventListener('click', ()=>{
        
        const oldState = state.getState();
        oldState.push('papel');
        const newState = oldState
        state.setState(newState)

        //LUEGO DE LA SELECCION
        hizoLaJugada = true;
        piedraEl?.classList.add('SelectedOff');
        tijeraEl?.classList.add('SelectedOff');
    });
    tijeraEl?.addEventListener('click', ()=>{
       
        const oldState = state.getState();
        oldState.push('tijera');
        const newState = oldState
        state.setState(newState)

        //LUEGO DE LA SELECCION
        hizoLaJugada = true;
        console.log(hizoLaJugada)
        papelEl?.classList.add('SelectedOff');
        piedraEl?.classList.add('SelectedOff');
    });
    return divEl
}