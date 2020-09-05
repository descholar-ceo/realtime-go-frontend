import { EventEmitter } from "events";

class Socket {
    constructor(websocket=new WebSocket(),eventEmitter=new EventEmitter()){
        super();
        this.websocket=websocket;
        this.eventEmitter=eventEmitter;
        ws.onmessage=this.message.bind(this)
        ws.onopen = this.open.bind(this);
        ws.onclose = this.close.bind(this);
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
        this.eventEmitter.emit('connect')
    }

    close(){
        this.setState({connected:false})
    }
}
