import React, { useState, useEffect } from 'react';
import ChannelCard from '../ChannelCard';
import { HorizontalSection, VerticalSection, TimeSubmitted } from '../Styles';

const ChannelSection = props => {
    const channels = props.channels

    return (
        channels ? (Object.entries(channels).map(([time, channels]) => (
            <VerticalSection>
                <TimeSubmitted>{time}</TimeSubmitted>
                <HorizontalSection>
                    {channels.map(channel => (
                        <ChannelCard key={channel.channelId} channel={channel}></ChannelCard>))}
                </HorizontalSection>
            </VerticalSection>
        ))) : <h1>Loading Channels...</h1>;
    )
};

export default ChannelSection;
