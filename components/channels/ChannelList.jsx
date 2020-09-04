import React, {Component} from 'react'
import PropTypes from 'prop-types';
import Channel from './Channel.jsx'


class ChannelList extends Component{
    render(){
        return(
           <ul>
               {this.props.channels.map(chan=>{
                   <li>
                       <Channel
                        channel={chan}
                        setChannel={this.props.setChannel}
                        />
                   </li>
               })}
           </ul> 
        )
    }
}

ChannelList.propTypes={
    channels: PropTypes.array.isRequired,
    setChannel: PropTypes.func.isRequired
}



