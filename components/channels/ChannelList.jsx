import React, {Component} from 'react'
import PropTypes from 'prop-types';
import Channel from './Channel.jsx'


class ChannelList extends Component{

}

ChannelList.propTypes={
    channels: PropTypes.array.isRequired,
    setChannel: PropTypes.func.isRequired
}
