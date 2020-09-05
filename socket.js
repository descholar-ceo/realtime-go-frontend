import { EventEmitter } from "events";

class Socket {
    constructor(websocket=new WebSocket(),eventEmitter=new EventEmitter()){
        super();
        this.websocket=websocket;
        this.eventEmitter=eventEmitter;
    }
}
