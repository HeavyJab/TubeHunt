import React, {useState, useEffect} from 'react';
import ChannelCard from '../ChannelCard';
import styled from 'styled-components';

const ChannelSection = props => {
    const Section = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    overflow: auto;
    margin-bottom: 5px;
    justify-content: center;
`
  
    return (
        <Section>
        {props.channels? (props.channels.map(channel => (
            <ChannelCard key={channel.channelId} channel={channel}></ChannelCard>
        ))) : null}
        </Section>
    );
  };
  
  export default ChannelSection;
  