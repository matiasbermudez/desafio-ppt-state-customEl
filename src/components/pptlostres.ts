import { state } from "../state";

export function pptLosTresInit(){
    class BotonesPptLosTres extends HTMLElement{
        shadow = this.attachShadow({mode : "open"})
        constructor(){
            super();
            this.render();
            
        }
        render(){
            console.log(this.ppt)
            this.shadow.innerHTML = `
               <div class="contenedor-3-botones">
                    <botones-ppt-el ppt="piedra"></botones-ppt-el>
                    <botones-ppt-el ppt="papel"></botones-ppt-el>
                    <botones-ppt-el ppt="tijera"></botones-ppt-el> 
                </div>
            `
            const style = document.createElement('style');
            style.textContent = `
                .contenedor-3-botones{
                    display:flex;
                    gap: 40px;
                }
               
            `
            this.shadow.append(style)
        }
        
    
        } 
        customElements.define('botones-ppt-los-tres-el', BotonesPptLosTres)
    }