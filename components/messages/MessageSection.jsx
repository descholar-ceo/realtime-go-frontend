import React, {Component} from 'react';
import ChannelForm from "./ChannelForm.jsx";
import ChannelList from "./ChannelList.jsx";
import PropTypes from "prop-types";

class MessageSection extends Component{
    render(){
        return(
            <div className="support panel panel-primary">
                <div className="panel-heading">
                    <strong>Channels</strong>
                </div>
                <div className="panel-body channels">
                    <ChannelList {...this.props} />
                    <ChannelForm {...this.props} />
                </div>
            </div>
        )
    }
}

MessageSection.propTypes={
    channels:PropTypes.array.isRequired,
    setChannel:PropTypes.func.isRequired,
    addChannel:PropTypes.func.isRequired,
    activeChannel: PropTypes.object.isRequired
}

export default MessageSection;
