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
                        key={chan.id}
                        {...this.props}
                        />)
               })}
           </ul> 
        )
    }
}

ChannelList.propTypes={
    channels: PropTypes.array.isRequired,
    setChannel: PropTypes.func.isRequired,
    activeChannel: PropTypes.object.isRequired
}

export default ChannelList;
