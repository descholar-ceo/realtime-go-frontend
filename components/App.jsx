import '../app.css';
import React, {Component} from 'react'
import ChannelSection from './channels/ChannelSection.jsx';
import UserSection from './users/UserSection.jsx';
import MessageSection from './messages/MessageSection.jsx';
import Socket from '../socket.js';

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
        let socket = this.socket = new Socket();
        socket.on('connect',this.onConnect.bind(this));
        socket.on('disconnect',this.onDisconnect.bind(this));
        socket.on('channel add', this.onAddChannel.bind(this));
        socket.on('user add', this.onAddUser.bind(this))
        socket.on('user edit', this.onEditUser.bind(this))
        socket.on('user remove', this.onRemoveUser.bind(this))
        socket.on('message add', this.onAddMessage.bind(this))
    }

    onAddMessage(message){
        let {messages}=this.state;
        messages.push(message);
        this.setState({messages})
    }
    onAddUser(user){
        let {users}=this.state;
        users.push(user);
        this.setState({users});
        users=users.map(user=>{
            if(editUser.id===user.id){
                return editUser;
            }
            return user;
        });
        this.setState({users})
    }

    onRemoveUser(removeUser){
        let {users}=this.state;
        users=users.filter(user=>{
            return user.id!==removeUser.id;
        });
        this.setState({users})
    }

    onEditUser(editUser){
        let {users}=this.state;

    }

    onConnect(){
        this.setState({connected:true});
        this.socket.emit('channel subscribe');
        this.socket.emit('user subscribe');
    }

    onDisconnect(){
        this.setState({connected:false})
    }

    newChannel(channel){
        let {channels} = this.state;
        channels.push(channel);
        this.setState({channels})
    }

    addChannel(name){
        let {channels}=this.state;
        //TODO: Send to the server
        this.socket.emit('channel add', {name})
    }

    setUserName(name){
        //TODO: Send to the server
        this.socket.emit('user edit', {name})
    }
    addMessage(body){
        //TODO: Send to the server
        let {activeChannel}=this.state;
        this.socket.emit('message add',{
            channelId:activeChannel.id,body
        });
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
