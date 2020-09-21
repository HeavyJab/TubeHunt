(async () => {
  const res = await fetch(
    "https://us-central1-tube-hunt.cloudfunctions.net/app/api/channels"
  );

  let ce = function (tag) {
    return document.createElement(tag);
  };

  const channels = await res.json();

  // MARK ** for html tags diff on actual youtube page
  let channelSection = ce("div"); //**
  channelSection.classList.add(
    "channel-section",
    "style-scope",
    "ytd-rich-grid-renderer"
  );

  let content = ce("div");
  content.classList.add("style-scope");
  content.classList.add("ytd-rich-section-renderer");

  let subContent = ce("div"); //**
  subContent.classList.add(
    "style-scope",
    "rich-shelf",
    "ytd-rich-section-renderer"
  );
  subContent.setAttribute("is-show-more-hidden", "");

  let dismiss = ce("div");
  dismiss.setAttribute("id", "dismissable");
  dismiss.classList.add("style-scope", "ytd-rich-shelf-renderer");

  // Heading
  let richShelf = ce("div");
  richShelf.setAttribute("id", "rich-shelf-header");
  richShelf.classList.add("style-scope", "ytd-rich-shelf-renderer");
  let richHeader = ce("h2");
  richHeader.setAttribute("id", "rich-header");
  richHeader.classList.add(
    "style-scope",
    "ytd-rich-shelf-renderer",
    "heading-text"
  );
  richHeader.textContent = "Tube Hunt";
  richShelf.appendChild(richHeader);
  // Put Cards In here
  let contents = ce("div");
  contents.setAttribute("id", "contents");
  contents.classList.add(
    "style-scope",
    "ytd-rich-shelf-renderer",
    "scroll-through"
  );

  channels.sort((a, b) => {
    return b.upvotesCount - a.upvotesCount;
  });

  channels.forEach((channel) => {
    let channelCard = ce("div");
    channelCard.classList.add("style-scope");
    channelCard.classList.add("ytd-rich-shelf-renderer");
    channelCard.setAttribute("is-post", "");

    let cardContent = ce("div");
    cardContent.setAttribute("id", "content");
    cardContent.classList.add("style-scope");
    cardContent.classList.add("ytd-rich-item-renderer");
    channelCard.appendChild(cardContent);

    let subCardContent = ce("div");
    subCardContent.classList.add(
      "style-scope",
      "ytd-post-renderer",
      "ytd-rich-item-renderer"
    );
    subCardContent.setAttribute("is-rich-grid_", "");
    subCardContent.setAttribute("surface_", "backstage-surface-type-home");
    subCardContent.setAttribute("uses-compact-lockup", "");
    subCardContent.setAttribute("attachment", "image");
    cardContent.appendChild(subCardContent);

    let cardDismiss = ce("div");
    cardDismiss.setAttribute("role", "link");
    cardDismiss.classList.add("ytd-post-renderer");
    cardDismiss.classList.add("style-scope");

    subCardContent.appendChild(cardDismiss);

    // Create Elements
    let header = ce("div");
    let body = ce("div");
    let toolbar = ce("div");
    cardDismiss.appendChild(header);
    cardDismiss.appendChild(body);
    cardDismiss.appendChild(toolbar);

    // Set Attributes
    header.setAttribute("id", "header");
    header.classList.add("style-scope");
    header.classList.add("ytd-post-renderer");
    body.setAttribute("id", "body");
    body.classList.add("style-scope");
    body.classList.add("ytd-post-renderer");

    toolbar.setAttribute("id", "toolbar");
    toolbar.classList.add("style-scope");
    toolbar.classList.add("ytd-post-renderer");

    // Header

    // Create Elements
    let authorThumbnail = ce("div");
    let author = ce("div");
    let authorDivider = ce("span");
    let timeText = ce("span");

    header.appendChild(authorThumbnail);
    header.appendChild(author);
    header.appendChild(authorDivider);
    header.appendChild(timeText);

    // Set Attributes
    authorThumbnail.setAttribute("id", "author-thumbnail");
    authorThumbnail.classList.add("style-scope");
    authorThumbnail.classList.add("ytd-post-renderer");
    author.setAttribute("id", "author");
    author.classList.add("style-scope");
    author.classList.add("ytd-post-renderer");
    authorDivider.setAttribute("id", "author-divider");
    authorDivider.classList.add("style-scope", "ytd-post-renderer");
    timeText.setAttribute("id", "published-time-text");
    timeText.setAttribute("has-link-only", "");
    timeText.classList.add("style-scope", "ytd-post-renderer");

    let timeLink = ce("a");
    timeLink.classList.add(
      "yt-simple-endpoint",
      "style-scope",
      "yt-formatted-string"
    );
    timeLink.setAttribute("href", `/channel/${channel.channelId}`);
    timeText.appendChild(timeLink);

    // Set Text
    authorDivider.textContent = "•";
    timeLink.textContent = new moment(channel.dateSubmitted).fromNow();

    // Finish authorThumbnail
    let thumbNailLink = ce("a");
    thumbNailLink.setAttribute("aria-hidden", "true");
    thumbNailLink.classList.add(
      "yt-simple-endpoint",
      "style-scope",
      "ytd-post-renderer"
    );
    thumbNailLink.setAttribute("tabindex", "-1");
    thumbNailLink.setAttribute("href", `/channel/${channel.channelId}`);
    let imgShadow = ce("div");
    imgShadow.setAttribute("fit", "");
    imgShadow.classList.add(
      "style-scope",
      "ytd-post-renderer",
      "no-transition"
    );
    imgShadow.style.backgroundColor = "transparent";
    mainImg = ce("img");
    mainImg.setAttribute("id", "img");
    mainImg.classList.add("style-scope", "yt-img-shadow");
    // mainImg.setAttribute("height", "32");
    // mainImg.setAttribute("width", "32");
    mainImg.setAttribute("src", channel.imgSrc);
    authorThumbnail.appendChild(thumbNailLink);
    thumbNailLink.appendChild(imgShadow);
    imgShadow.appendChild(mainImg);

    // Finish author
    let authorText = ce("a");
    let textSpan = ce("span");
    authorText.setAttribute("id", "author-text");
    authorText.setAttribute("href", `/channel/${channel.channelId}`);
    authorText.classList.add(
      "yt-simple-endpoint",
      "style-scope",
      "ytd-post-renderer"
    );
    textSpan.classList.add("style-scope", "ytd-post-renderer");
    textSpan.textContent = channel.title;
    author.appendChild(authorText);
    authorText.appendChild(textSpan);

    contents.append(channelCard);

    // let header = document.createElement("div");
    // header.classList.add("style-scope");
    // header.setAttribute("id", "header");

    // let title = document.createElement("div");
    // title.classList.add("style-scope");
    // title.setAttribute("id", "channel-title");

    // let profileLink = document.createElement("a");
    // profileLink.classList.add("style-scope");
    // profileLink.setAttribute("id", "profile-link");
    // profileLink.setAttribute("target", "_blank");
    // profileLink.setAttribute("href", `/channel/${channel.channelId}`);

    // let channelProfile = document.createElement("div");
    // channelProfile.classList.add("style-scope");
    // channelProfile.setAttribute("id", "channel-profile");

    // let profilePic = document.createElement("img");
    // profilePic.setAttribute("height", "40");
    // profilePic.setAttribute("width", "40");
    // profilePic.setAttribute("id", "img");
    // profilePic.classList.add("style-scope");
    // profilePic.classList.add("yt-img-shadow");
    // profilePic.setAttribute("id", "profile-pic");
    // profilePic.setAttribute("src", channel.imgSrc);

    // let channelHeader = document.createElement("h3");
    // channelHeader.classList.add("style-scope");
    // channelHeader.textContent = channel.title;

    // let submissionDiv = document.createElement("div");
    // submissionDiv.classList.add("style-scope");
    // submissionDiv.setAttribute("id", "submission-time");

    // let submissionSpan = document.createElement("span");
    // submissionSpan.classList.add("style-scope");
    // submissionSpan.textContent = new moment(channel.dateSubmitted).fromNow();

    // submissionDiv.appendChild(submissionSpan);
    // header.appendChild(title);
    // title.appendChild(profileLink);
    // profileLink.appendChild(channelProfile);
    // channelProfile.appendChild(profilePic);
    // channelProfile.appendChild(channelHeader);
    // header.appendChild(submissionDiv);
    // submissionDiv.appendChild(submissionSpan);

    // // channelCard.innerHTML += `
    // // <div id="header">
    // //     <div id=channel-title>
    // //         <a
    // //         href="${"/channel/" + channel.channelId}"
    // //         id='profile-link'
    // //         target="_blank"
    // //         >
    // //             <div id=channel-profile>
    // //                 <img src="${channel.imgSrc}">
    // //                 <h3>
    // //                     ${channel.title}
    // //                 </h3>
    // //             </div>
    // //         </a>
    // //     </div>
    // //     <div id="submission-time">
    // //     <span>${new moment(channel.dateSubmitted).fromNow()}</span>
    // // </div>
    // //   <p id="channel-desc">
    // //       ${channel.desc}
    // //   </p>

    // let channelDesc = document.createElement("p");
    // channelDesc.classList.add("style-scope");

    // channelDesc.setAttribute("id", "channel-desc");
    // channelDesc.textContent = channel.desc;

    // let keywordsDiv = document.createElement("div");
    // keywordsDiv.classList.add("style-scope");

    // keywordsDiv.setAttribute("id", "keywords");
    // for (let i = 0; i < 5; i++) {
    //   let keywordSpan = document.createElement("span");
    //   keywordSpan.classList.add("style-scope");
    //   keywordSpan.textContent = channel.keywords[i];
    //   keywordsDiv.appendChild(keywordSpan);
    // }

    // let channelFooter = document.createElement("div");
    // channelFooter.classList.add("style-scope");

    // channelFooter.setAttribute("id", "channel-footer");

    // let votingDiv = document.createElement("div");
    // votingDiv.classList.add("style-scope");

    // votingDiv.setAttribute("id", "voting");

    // let votingSubDiv = document.createElement("div");
    // votingSubDiv.classList.add("style-scope");

    // let upvoteBtn = document.createElement("button");
    // upvoteBtn.classList.add("style-scope");

    // upvoteBtn.setAttribute("id", "upvote");
    // upvoteBtn.setAttribute("name", channel.channelID);
    // upvoteBtn.classList.add("voting");
    // upvoteBtn.textContent = "👏";
    // let upvoteCount = document.createElement("span");
    // upvoteCount.classList.add("style-scope");

    // upvoteCount.setAttribute("id", `upvotesCount-${channel.channelID}`);
    // votingSubDiv.appendChild(upvoteBtn);
    // votingSubDiv.appendChild(upvoteCount);
    // //   <div id="keywords">
    // //       <span>${channel.keywords[0]}</span>
    // //       <span>${channel.keywords[1]}</span>
    // //       <span>${channel.keywords[2]}</span>
    // //       <span>${channel.keywords[3]}</span>
    // //       <span>${channel.keywords[4]}</span>
    // //   </div>

    // let subLink = document.createElement("a");
    // subLink.classList.add("style-scope");

    // subLink.setAttribute(
    //   "href",
    //   `"https://www.youtube.com/channel/${channel.channelID}?sub_confirmation=1`
    // );
    // let subBtn = document.createElement("button");
    // subBtn.classList.add("style-scope");

    // subBtn.setAttribute("id", "subscribe");
    // subBtn.setAttribute("name", channel.channelID);
    // subBtn.classList.add("voting");
    // subBtn.textContent = "🍿";
    // subLink.appendChild(subBtn);
    // votingDiv.appendChild(subLink);
    // votingDiv.appendChild(votingSubDiv);
    // channelFooter.appendChild(votingDiv);

    // channelCard.append(header);
    // channelCard.append(channelDesc);
    // channelCard.append(channelFooter);
    // contents.appendChild(channelCard);
  });

  dismiss.appendChild(richShelf);
  dismiss.appendChild(contents);
  subContent.appendChild(dismiss);
  content.appendChild(subContent);
  channelSection.appendChild(content);
  //   <div id="channel-footer">
  //       <div id="voting">
  //           <div>
  //               <button id="upvote" class="voting" name=${
  //                 channel.channelId
  //               }>👏</button>
  //               <span id="upvotesCount-${channel.channelId}">${
  //     channel.upvotesCount
  //   }</span>
  //           </div>
  //           <a href="https://www.youtube.com/channel/${
  //             channel.channelId
  //           }?sub_confirmation=1">
  //           <button id="subscribe" class="voting" name=${
  //             channel.channelId
  //           }>🍿</button>
  //           </a>
  //       </div>
  //   </div>
  //   </div>
  //       `;
  // });

  //   <button id="downvote" name=${channel.channelId}>👎</button>

  //   Observe DOM mutation
  const mo = new MutationObserver(() => {
    if (!document.contains(channelSection)) {
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
      mainPage.prepend(channelSection);

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
