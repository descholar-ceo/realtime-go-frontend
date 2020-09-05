import React, {Component} from 'react';
import MessageForm from "./MessageForm.jsx";
import MessageList from "./MessageList.jsx";
import PropTypes from "prop-types";

class MessageSection extends Component{
    render(){
        let {activeChannel} = this.props;
        return(
            <div className="messages-container">
                <div className="panel-heading">
                    <strong>{activeChannel.name}</strong>
                </div>
                <div className="messages">
                    <MessageList {...this.props} />
                    <MessageForm {...this.props} />
                </div>
            </div>
        )
    }
}

MessageSection.propTypes={
    messages:PropTypes.array.isRequired,
    addMessage:PropTypes.func.isRequired,
    activeChannel: PropTypes.object.isRequired
}

export default MessageSection;
