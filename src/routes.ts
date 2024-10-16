import { explicacionInit } from "./pages/explicacion/explicacionIndex";
import { ganasteInit } from "./pages/ganaste/ganasteIndex";
import { jugadaInit } from "./pages/jugada/jugadaIndex";
import { jugarInit } from "./pages/jugar/jugarIndex";
import { perdisteInit } from "./pages/perdiste/perdisteIndex";
import { welcomeInit } from "./pages/welcome/welcomeIndex";



const routes = [
    {
        path: /\/welcome/,
        component: welcomeInit
    },
    {
        path: /\/explicacion/,
        component: explicacionInit
    },
    {
        path: /\/jugar/,
        component: jugarInit
    },
    {
        path: /\/jugada/,
        component: jugadaInit
    },
    {
        path: /\/ganaste/,
        component: ganasteInit
    },
    {
        path: /\/perdiste/,
        component: perdisteInit
    }
]

export function initRouter(container: Element){

        function goTo(path: any){
            history.pushState({}, "", path);
            handlerRoute(path)
        }

        function handlerRoute(route:any){
            console.log("Ruta enviada: ", route)

            for (const r of routes){
                if(r.path.test(route)){
                    const el = r.component({goTo: goTo});

                    if(container.firstChild){
                        container.firstChild.remove()
                    }

                    container.append(el)

                }
            }
        }
        if (location.pathname == "/") {
            goTo('/welcome')
        } else {
            handlerRoute(location.pathname)
        }
}