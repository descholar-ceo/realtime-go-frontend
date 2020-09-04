import React, {Component} from 'react';
import ChannelForm from "./ChannelForm.jsx";
import ChannelList from "./ChannelList.jsx";
import PropTypes from "prop-types";

class ChannelSection extends Component{
    render(){
        return(
            <div>
                <ChannelList {...this.props} />
                <ChannelForm {...this.props} />
            </div>
        )
    }
}

ChannelSection.propTypes={
    channels:PropTypes.array.isRequired,
    setChannel:PropTypes.func.isRequired,
    addChannel:PropTypes.func.isRequired
}

export default ChannelSection;
