import { countDownInit } from "../../components/countDown";
import { state } from "../../state";

export function jugarInit(params:any){
    countDownInit() 
   let counter = 3;
 
    
    const divEl = document.createElement('div');
  
    divEl.innerHTML = `
         <div id="countdown" class="countdown-circle">${counter}</div>
    `
    function countDownTry (){
         const intervalId = setInterval(()=>{
            counter--;
            const countdownElement = divEl.querySelector('.countdown-circle'); 
            
         if (countdownElement) {
            //LE HAGO TO STRING POR QUE EL TEXTCONTENT NO ADMITE NUMBERS, SOLO STRING
            countdownElement.textContent = counter.toString();
        }
        //SI EL CONTADOR LLEGA A 0 CORTO EL INTERVAL CON CLEARINTERVAL Y EL NOMBRE DEL INTERVAL
             if(counter <= 0){
                 clearInterval(intervalId);
                 params.goTo('/jugada')
             }
         }, 1000);
     };
     countDownTry ()
    
    return divEl
}