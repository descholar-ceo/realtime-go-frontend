import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MessageForm extends Component{
    onSubmit(e){
        e.preventDefault();
        const node = this.refs.channel;
        const channelName=node.value;
        this.props.addMessage(channelName)
        node.value="";
    }
    render(){
        return(
            <form onSubmit={this.onSubmit.bind(this)}>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Channel name"
                        ref="channel"
                    />
                </div>
            </form>
        )
    }
}

MessageForm.propTypes={
    addMessage: PropTypes.func.isRequired,
    activeChannel: PropTypes.object.isRequired
}

export default MessageForm;
