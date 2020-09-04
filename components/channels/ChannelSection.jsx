import React, {Component} from 'react';
import ChannelForm from "./ChannelForm.jsx";
import ChannelList from "./ChannelList.jsx";
import PropTypes from "prop-types";

class ChannelSection extends Component{
    render(){
        return(
            <div>
                <ChannelList
                    channels={this.props.channels}
                    setChannel={this.props.setChannel}
                />
                <ChannelForm
                    addChannel={this.props.addChannel}
                />
            </div>
        )
    }
}

ChannelSection.propTypes={
    channels:PropTypes.array.isRequired,
    setChannel:PropTypes.func.isRequired,
    addChannel:ProTypes.func.isRequired
}
