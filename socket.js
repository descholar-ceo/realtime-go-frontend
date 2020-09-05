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
}
