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
        return jugadaPc
    },
    setJugada(jugadaPlayer:jugadas){
        const jugadaMaquina = this.setMaquinaPlay();
        const jugadaCompleta = {
            jugador: jugadaPlayer,
            maquina: jugadaMaquina,
            ganador: this.setGanador(jugadaPlayer, jugadaMaquina)
        }
        const estadoViejo = this.getState();
        const nuevoState = [...estadoViejo, jugadaCompleta];
        console.log("Nuevo Estado: ",nuevoState);

        this.setState(nuevoState)
        
    },
    setGanador(jugadaPlayer: jugadas, jugadaMaquina:jugadas){
        console.log(jugadaMaquina, jugadaPlayer)
        if(jugadaPlayer === jugadaMaquina){
            return "empate"
        }else if (jugadaPlayer === "piedra" && jugadaMaquina === "papel"){
            return "maquina"
        }else if (jugadaPlayer === "piedra" && jugadaMaquina === "tijera"){
            return "jugador"
        }else if (jugadaPlayer === "tijera" && jugadaMaquina === "papel"){
            return "jugador"
        }else if(jugadaPlayer === "tijera" && jugadaMaquina === "piedra"){
            return "maquina"
        }else if (jugadaPlayer === "papel" && jugadaMaquina === "piedra"){
            return "jugador"
        }else if (jugadaPlayer === "papel" && jugadaMaquina === "tijera"){
            return "maquina"
        }
    }
}
export  { state }