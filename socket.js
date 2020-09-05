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
        this.eventEmitter.on(name,func)
    }

    off(name,func){
        this.eventEmitter.removeListener(name,func)
    }

    message(e){
        const event = JSON.parse(e.data);
        if(event.name==='channel add'){
            this.newChannel(event.data);
        }
    }

    open(){
        this.setState({connected:true})
    }

    close(){
        this.setState({connected:false})
    }
}
