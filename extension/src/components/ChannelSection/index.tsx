import React, { useState, useEffect } from 'react';
import ChannelCard from '../ChannelCard';
import { HorizontalSection } from '../Styles';


const ChannelSection = props => {

    return (
        <HorizontalSection>
            {props.channels ? (props.channels.map(channel => (
                <ChannelCard key={channel.channelId} channel={channel}></ChannelCard>
            ))) : null}
        </HorizontalSection>
    );
};

export default ChannelSection;
