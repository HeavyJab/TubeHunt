import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Channel from './Channel'

const ChannelSection = props => {
    const [channels, setChannels] = useState([]);

    useEffect(() => {
        console.log('Fired')
        const getChannels = async () => {
            const res = await axios.get('https://us-central1-tube-hunt.cloudfunctions.net/app/api/channels')
            console.log(res.data)
            setChannels(res.data);
        };

        console.log("Should call channels")
        getChannels();
    }, [])

    console.log(`${channels}channels NOT WORKING`);

    return (
      <>        
       {channels.map((channel) => (
      <Channel channel={channels}/>))}
      </>
    );
}

export default ChannelSection;