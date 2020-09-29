import React, { useState, useEffect } from 'react';
import ChannelCard from '../ChannelCard';
import { HorizontalSection, VerticalSection, TimeSubmitted } from '../Styles';
import dayjs from 'dayjs';


const ChannelSection = props => {
    const channelsSorted = {};

    props.channels ? (
        props.channels
        .filter(channel => dayjs(channel.dateSubmitted).isSame(dayjs(), 'month'))
        .forEach(channel => {
        const date = dayjs(channel.dateSubmitted).format('dddd DD MMM');
        if (channelsSorted[date]) {
            channelsSorted[date].push(channel);
            channelsSorted[date].sort((a, b) => {
                return b.upvotesCount - a.upvotesCount;
            });
        } else {
            channelsSorted[date] = [channel];
        }
    })) : ('Loading channels...'));

    return (
        channelsSorted ? (Object.entries(channelsSorted).map(([time, channels]) => (
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
