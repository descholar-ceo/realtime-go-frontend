import React, {Component} from 'react'
import PropTypes from 'prop-types';
import Channel from './Channel.jsx'


class ChannelList extends Component{
    render(){
        return(
           <ul>
               {this.props.channels.map(chan=>{
                   return(
                       <Channel
                        channel={chan}
                        setChannel={this.props.setChannel}
                        />)
               })}
           </ul> 
        )
    }
}

ChannelList.propTypes={
    channels: PropTypes.array.isRequired,
    setChannel: PropTypes.func.isRequired
}

export default ChannelList;
