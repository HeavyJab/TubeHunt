import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  align-items: center;
  overflow-x: auto;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Frame = styled.iframe`
    margin: 15px;
    width: 100%;
    width: 250px; 
    height: 170px;
`

const VideoSection = (props) => {
  const videoIds = props.videos;

  return (
    <Section>
      {videoIds? (videoIds.slice(0,8).map((videoId) => (
        <Frame
          key={videoId}
          width="250"
          height="170"
          src={`https://www.youtube.com/embed/${videoId}`}
        ></Frame>
      ))) : (<h1>Loading videos...</h1>)}
    </Section>
  )
};

export default VideoSection;
