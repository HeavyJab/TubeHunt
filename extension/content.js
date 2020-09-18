(async () => {
  const res = await fetch(
    "https://us-central1-tube-hunt.cloudfunctions.net/app/api/channels"
  );
  const channels = await res.json();

//   order channels by submission time
  

  const channelCard = document.createElement("div");
  channelCard.setAttribute("id", "channel-section")

  channels.forEach((channel) => {
    channelCard.innerHTML += `

    <div id="channel-card">
    <div id=header>
        <a href="${'/channel/' + channel.channelId}" id='profile-link' target="_blank">
            <div id=channel-profile> 
                <img id="channel-profile" src="${channel.imgSrc}">
                <h2>
                    ${channel.title}
                </h2>
            </div>
        </a>

        <a href="https://www.reddit.com/r/TubeHunt/" target="_blank">
            <span>r/TubeHunt</span>
        </a>
    </div>

    <div id="channel-desc">
        ${channel.desc}
    </div>

    <div id="channel-footer"> 
        <button></button>
    </div>
    </div>
        `;
  });

  const mo = new MutationObserver(() => {
    console.log("in observer");
    if (!document.contains(channelCard)) {
      console.log("Changing");
      inject();
    }
  });

  const inject = () => {
    mo.disconnect();
    let mainPage = document.querySelector("#contents");
    mainPage.prepend(channelCard);
    observe();
  };

  inject();

  function observe() {
    mo.observe(document.body, { childList: true, subtree: true });
  }

  observe();
})();

console.log("loaded the script!");
