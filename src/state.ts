type jugadas = "piedra" | "papel" | "tijera"
const state = {
    data : [],
    jugadas : ["piedra","papel","tijera"],
    listeners: [],
    
    getState(){
        return this.data;
    },
    setState(newState){
        this.data = newState;
        console.log('Este es el nuevo State: ', this.data);

        for(const cb of this.listeners){
            cb();
        }
    },
    suscribe(callback : ()=> any){
        this.listeners.push(callback)
    },
    setMaquinaPlay(){
        //RANDOM QUE RESPONDE 1 JUGADA PIEDRA//PAPEL//TIJERA
        const jugadaPc = this.jugadas[Math.floor(Math.random() * 3)];
        console.log(jugadaPc)
        return jugadaPc
    }
}
export  { state }