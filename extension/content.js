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
  console.log(channels);

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
    <div id="keywords">
        <span>${channel.keywords[0]}</span>
        <span>${channel.keywords[1]}</span>
        <span>${channel.keywords[2]}</span>
        <span>${channel.keywords[3]}</span>
        <span>${channel.keywords[4]}</span>
    </div>

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
  //   Observe DOM mutation
  const mo = new MutationObserver(() => {
    if (!document.contains(channelCard)) {
      console.log("Changing");
      inject();
    }
  });

  // Inject content
  (observe = () => {
    mo.observe(document.body, { childList: true, subtree: true });
  })()(
    (inject = () => {
      mo.disconnect();

      let mainPage = document.querySelector("#contents");
      mainPage.prepend(channelCard);

      window.onclick = async (event) => {
        const target = event.target;
        if (target.matches("#upvote")) {
          const channelId = document.activeElement.getAttribute("name");

          // change the view
          let upvotesCount = document.getElementById(
            `upvotesCount-${channelId}`
          ).innerText;
          const upvotesElm = document.getElementById(
            `upvotesCount-${channelId}`
          );
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
      };

      observe();
    })
  )();
})();

console.log("loaded the script!");
