import { EventEmitter } from "events";

class Socket {
    constructor(websocket=new WebSocket(),eventEmitter=new EventEmitter()){
        this.websocket=websocket;
        this.eventEmitter=eventEmitter;
        websocket.onmessage=this.message.bind(this)
        websocket.onopen = this.open.bind(this);
        websocket.onclose = this.close.bind(this);
    }

    on(name,func){
        this.eventEmitter.on(name,func);
    }

    off(name,func){
        this.eventEmitter.removeListener(name,func);
    }

    emit(name,data){
        const message=JSON.stringify({name,data});
        this.websocket.send(message);
    }

    message(e){
        // const event = JSON.parse(e.data);
        // if(event.name==='channel add'){
        //     this.newChannel(event.data);
        // }
        
        try{
            const message=JSON.parse(e.data);
            this.eventEmitter.emit(message.name,message.data);
        }catch(err){
            this.eventEmitter.emit('error',err);
        }
    }

    open(){
        // this.setState({connected:true})
        this.eventEmitter.emit('connect');
    }

    close(){
        // this.setState({connected:false})
        this.eventEmitter.emit('disconnect');
    }
}

export default Socket;
