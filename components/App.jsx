import '../app.css';
import React, {Component} from 'react'
import ChannelSection from './channels/ChannelSection.jsx';
import UserSection from './users/UserSection.jsx';
import MessageSection from './messages/MessageSection.jsx';

class App extends Component{
    constructor(props){
        super(props);
        this.state={
            channels:[],
            users:[],
            messages:[],
            activeChannel:{},
            connected:false
        }
    }
    componentDidMount(){
        let ws = new WebSocket("ws://echo.websocket.org");
        ws.onmessage=this.message.bind(this)
        ws.onopen = this.open.bind(this);
        ws.onclose = this.close.bind(this);
    }

    message(e){
        const event = JSON.parse(e.data)
        if(event.name==='add channel'){
            this.newChannel(event.data)
        }
    }

    open(e){
        this.setState({connected:true})
    }

    close(e){
        this.setState({connected:false})
    }

    addChannel(name){
        let {channels}=this.state;
        channels.push({id:channels.length,name});
        this.setState({channels});
        //TODO: Send to the server
    }

    setUserName(name){
        let {users}=this.state;
        users.push({id:users.length,name});
        this.setState({users});
        //TODO: Send to the server
    }
    addMessage(body){
        let {messages,users}=this.state;
        let createdAt=new Date;
        let author = users.length>0?users[0].name:'annonymous';
        messages.push({id:messages.length,body,createdAt,author});
        this.setState({messages});
        //TODO: Send to the server
    }
    setChannel(activeChannel){
        this.setState({activeChannel});
        //TODO: Get channel's messages from the server
    }
    render(){
        return(
            <div className="app">
                <div className="nav">
                    <ChannelSection
                        {...this.state}
                        addChannel={this.addChannel.bind(this)}
                        setChannel={this.setChannel.bind(this)}
                    /> 
                    <UserSection
                    {...this.state}
                    setUserName={this.setUserName.bind(this)}
                    />
                </div>
                <MessageSection
                    {...this.state}
                    addMessage={this.addMessage.bind(this)}
                />
            </div>)}}

export default App;
