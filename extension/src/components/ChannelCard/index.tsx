import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
const relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime);
import axios from 'axios';
import { Card, Header, Link, Profile, Desc, Img, Footer, Button, VerticalSection } from '../Styles';
import VideoSection from '../VideoSection'

const ChannelCard = props => {
    const [showVideos, setShowVideos] = useState(false);
    const [videos, setVideos] = useState<Array>([]);

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

    useEffect(() => {
        const fetchVideos = async () => {
            const res = await axios.get(`https://us-central1-tube-hunt.cloudfunctions.net/app/api/videos/${channelId}`);
            const videos = await res.data;
            setVideos(videos);
        }
        fetchVideos();
        console.log(`Channel card mounted`);
    }, []);

    return (
        <VerticalSection>
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
                    <span>{dayjs(dateSubmitted).fromNow()}</span>
                </Header>


                <Desc>
                    {desc}
                </Desc>

                <Footer>
                    <div>
                        <Button id="upvote" className="voting">👏</Button>
                        <span>{upvotesCount}</span>
                    </div>

                    <Button onClick={() => { setShowVideos(!showVideos) }}>📺</Button>

                    <Link href={`https://www.youtube.com/channel/${channelId}?sub_confirmation=1`}>
                        <Button id="subscribe" className="voting">🍿</Button>
                    </Link>
                </Footer>
            </Card>

            {showVideos ? (<VideoSection videos={videos.videoIds} />) : null}
        </VerticalSection>

    )
}

export default ChannelCard;