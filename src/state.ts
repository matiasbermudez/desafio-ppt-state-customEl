const state = {
    data : [],
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
    }
}
export  { state }