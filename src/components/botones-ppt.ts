import piedra from '../imgs/piedra.png'
import papel from '../imgs/papel.png'
import tijera from '../imgs/tijera.png'
export function botonesPptInit(){
    class BotonesPpt extends HTMLElement{
        shadow = this.attachShadow({mode : "open"})
        ppt = this.getAttribute('ppt');
        objetoPpt = {
            piedra : piedra, 
            papel : papel,
            tijera: tijera
        }
        constructor(){
            super();
            this.render();
            
        }
        render(){
            console.log(this.ppt)
            this.shadow.innerHTML = `
                <button class="boton__ppt">
                    <img src="${this.objetoPpt[this.ppt]}" class="boton__ppt-img">
                </button>
                
            `
            const style = document.createElement('style');
            style.textContent = `
                .boton__ppt{
                        border: none;
                        cursor: pointer; 
                }
                .boton__ppt-img{
                    height: 150px;
                }
                .boton__ppt-img:hover{
                      height: 185px;   
                }
               
            `
            this.shadow.append(style)
        }
        
    
        } 
        customElements.define('botones-ppt-el', BotonesPpt)
    }