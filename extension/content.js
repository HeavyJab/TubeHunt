(async () => {
  const res = await fetch(
    "https://us-central1-tube-hunt.cloudfunctions.net/app/api/channels"
  );
  const channels = await res.json();

  const channelCard = document.createElement("div");
  channelCard.setAttribute("id", "channel-section");

  channels.sort((a, b) => {
    return b.upvotesCount - a.upvotesCount;
  });

  channels.forEach((channel) => {
    channelCard.innerHTML += `
    <div id="channel-card">
    <div id="header">
        <div id=channel-title>
            <a href="${
              "/channel/" + channel.channelId
            }" id='profile-link' target="_blank">
                <div id=channel-profile> 
                    <img id="channel-profile" src="${channel.imgSrc}">
                    <h3>
                        ${channel.title}
                    </h3>
                </div>
            </a>
        </div>
        <div id="submission-time">
        <span>${new moment(channel.dateSubmitted).fromNow()}</span>
    </div>
    </div>
    

    <p id="channel-desc">
        ${channel.desc}
    </p>

    <div id="channel-footer"> 
        <div id="voting">
            <div>
                <button id="upvote" class="voting" name=${
                  channel.channelId
                }>👏</button>
                <span id="upvotesCount-${channel.channelId}">${
      channel.upvotesCount
    }</span>
            </div>

            <button id="show" class="voting" name="${channel.channelId}"> 
                📺
            </button>

            <a href="https://www.youtube.com/channel/${
              channel.channelId
            }?sub_confirmation=1">
            <button id="subscribe" class="voting" name=${
              channel.channelId
            }>🍿</button>
            </a>
        </div>
    </div>
    </div>
        `;
  });

  //   <button id="downvote" name=${channel.channelId}>👎</button>
  // <div id="keywords">
  //       <span>${channel.keywords[0]}</span>
  //       <span>${channel.keywords[1]}</span>
  //       <span>${channel.keywords[2]}</span>
  //       <span>${channel.keywords[3]}</span>
  //       <span>${channel.keywords[4]}</span>
  //   </div>

  //   Observe DOM mutation

  let showVideos = false;

// Observer class to watch for DOM changes
  const mo = new MutationObserver(() => {
    if (!document.contains(channelCard)) {
      console.log("Changing");
      inject();
      
      if(showVideos) {
        console.log(showVideos)
        injectVideos(showVideos);
      }
    }
  });

  // observe changes  
  observe = () => {
    mo.observe(document.body, { childList: true, subtree: true });
  };

  let mainPage = document.querySelector("#contents");
  
  // inject channel cards immediately invoked
  (inject = () => {
      mo.disconnect();

      mainPage.prepend(channelCard);
      observe();
  })();

  // inject videos if videos exists
  injectVideos = (videos) => {
    mo.disconnect();

    mainPage.firstChild.insertAdjacentElement("afterend", videos);

    observe();
  }

  // create a video section html
  createVideosSection = async (channelId) => {
    const videos = document.createElement("div");
    videos.setAttribute("id", `video-section`);
    videos.setAttribute("name", `${channelId}`);

    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=AIzaSyCUY5bnDpFKFrHh6btLHNt5MT6PHIZBSyk&channelId=${channelId}&part=snippet,id&order=date&maxResults=5`,
      {
        method: "get",
      }
    );

    if (res.status == 200) {
      data = await res.json();
      data.items.forEach((video) => {
        videos.innerHTML += `
        <iframe width="250" height="170"
        src="https://www.youtube.com/embed/${video.id.videoId}">
        </iframe>
      `;
      });
    } else {
      console.log(res.status)
    }

    return videos;
  };

  // monitor all click events
  window.onclick = async (event) => {
    const target = event.target;
    if (target.matches("#upvote")) {
      const channelId = document.activeElement.getAttribute("name");

      // change the view
      let upvotesCount = document.getElementById(`upvotesCount-${channelId}`)
        .innerText;
      const upvotesElm = document.getElementById(`upvotesCount-${channelId}`);
      upvotesCount = parseInt(upvotesCount) + 1;
      upvotesElm.innerHTML = upvotesCount;

      // change model
      const res = await fetch(
        `https://us-central1-tube-hunt.cloudfunctions.net/app/api/${channelId}/upvote`,
        {
          method: "get",
        }
      );
      console.log("Upvoted!");
    }

    // show videos
    if (target.matches("#show")) {
      console.log("clicked!!!!");
      const channelId = document.activeElement.getAttribute("name");

      if (showVideos) {
        console.log("contains channel-section");
        if (
          document.getElementById("video-section").getAttribute("name") != channelId
        ) {
          document.getElementById("video-section").remove();
          const videos = await createVideosSection(channelId);
          showVideos = videos
          injectVideos(videos);
        } else {
          showVideos = false;
          document.getElementById("video-section").remove();
        }
        // if there is no showVideos
      } else {
        const videos = await createVideosSection(channelId);
        showVideos = videos
        injectVideos(videos);
      }
    }
  };
})();

console.log("loaded the script!");
