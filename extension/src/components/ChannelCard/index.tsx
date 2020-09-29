import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
const relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime);
import { Card, Header, Link, Profile, Desc, Img, Footer, Button, Span, Clap} from '../Styles';

const ChannelCard = props => {
    const { channelId,
        dateSubmitted,
        upvotes,
        keywords,
        subscribe,
        desc,
        upvotesCount,
        imgSrc,
        title
    } = props.channel;

    return (
        <>
            <Card>
                <Header>
                    <Link href={'/channel/' + channelId} id='profile-link' target="_blank">
                        <Profile>
                            <Img id="channel-profile" src={imgSrc} />
                            <h3>
                                {title}
                            </h3>
                        </Profile>
                    </Link>
                </Header>


                <Desc>
                    {desc}
                </Desc>

                <Footer>
                    <Clap>
                        <Button id="upvote" className="voting">👏</Button>
                        <Span>{upvotesCount}</Span>
                    </Clap>

                    <Link href={`https://www.youtube.com/channel/${channelId}?sub_confirmation=1`}>
                        <Button id="subscribe" className="voting">🍿</Button>
                    </Link>
                </Footer>
            </Card>
        </>

    )
}

export default ChannelCard;