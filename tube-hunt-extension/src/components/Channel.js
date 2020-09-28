import React from 'react'

const Channel = props => {

    console.log(props)
    return (
      <div>
        <h3>{props.channel.title}</h3>

        <button id="show" class="voting" name={props.channel.channelId}>
          📺
        </button>

        <p class="channel-desc">{props.channel.desc}</p>

        <div>
          <button class="upvote" class="voting" name={props.channel.channelId}>
            👏
          </button>
          <span class="upvotesCount">
            {props.channel.upvotesCount}
          </span>
        </div>

        <a
          href="https://www.youtube.com/channel/${
              channel.channelId
            }?sub_confirmation=1"
        >
          <button id="subscribe" class="voting" name={props.channel.channelId}>
            🍿
          </button>
        </a>
      </div>
    );
}

export default Channel;