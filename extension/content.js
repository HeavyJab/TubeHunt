let first_load = true;

(async () => {
  const channelSection = document.createElement("div");
  channelSection.className = "style-scope ytd-rich-grid-renderer";
  let ytStyle = "style-scope ytd-rich-shelf-renderer"; // don't use this yet
  channelSection.innerHTML = `
    <div id="content" class="style-scope ytd-rich-section-renderer">
        <div class="style-scope ytd-rich-section-renderer">
            <div id="dismissable" class="style-scope ytd-rich-shelf-renderer">
                <div id="rich-shelf-header" class="style-scope ytd-rich-shelf-renderer">
                    <h2 class="style-scope ytd-rich-shelf-renderer">
                        <div id="title-container" class="style-scope ytd-rich-shelf-renderer">
                            <div id="title-text" class="style-scope ytd-rich-shelf-renderer">
                                <span id="title" class="style-scope ytd-rich-shelf-renderer">Tube Hunt</span>
                            </div>
                        </div>
                    </h2>
                </div>
                <div id="contents" class="style-scope ytd-rich-shelf-renderer">

                    <div class="style-scope ytd-rich-shelf-renderer" is-post>
                        <div id="content" class="style-scope ytd-rich-item-renderer">
                            <div class="style-scope ytd-rich-item-renderer" is-rich-grid_ surface_="backstage-surface-type-home" uses-compact-lockup_ attachment="image">
                                <div id="dismissable" role="link" class="style-scope ytd-post-renderer">
                                    <div id="header" class="style-scope ytd-post-renderer">
                                        <div id="author-thumbnail" class="style-scope ytd-post-renderer">
                                            <a aria-hidden="true" class="yt-simple-endpoint style-scope ytd-post-renderer" href="#" tabindex="-1">
                                                <div fit height="32" width="32" class="style-scope ytd-post-renderer no-transition" loaded style="background-color: transparent;">
                                                    <img id="img" style="style-scope yt-img-shadow" alt="HBO Max" height="32" width="32" src="">
                                                </div>
                                            </a>
                                        </div>
                                        <div id="author" class="style-scope ytd-post-renderer">
                                            <a id="author-text" class="yt-simple-endpoint style-scope ytd-post-renderer" href="/channel/UCx-KWLTKlB83hDI6UKECtJQ">
                                                <span class="style-scope ytd-post-renderer">HBO Max</span>
                                            </a>
                                            <span id="author-comment-badge" class="style-scope ytd-post-renderer" hidden=""></span>
                                        </div>
                                        <span id="author-divider" class="style-scope ytd-post-renderer">•</span>
                                        <div id="published-time-text" class="style-scope ytd-post-renderer" has-link-only_="">
                                            <a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="/post/Ugx1W6rsXmS9BZoRIZd4AaABCQ" dir="auto">19 minutes ago</a>
                                        </div>
                                    </div>

                                    <div id="body" class="style-scope ytd-post-renderer">
                                        <div id="post-text" class="style-scope ytd-post-renderer">
                                            <ytd-expander id="expander" class="style-scope ytd-post-renderer" collapsed="" hidden="" style="--ytd-expander-collapsed-height:80px;"><!--css-build:shady-->
                                                <div id="content" class="style-scope ytd-expander">
                                                    <yt-formatted-string id="content-text" slot="content" dir="auto" force-default-style="" split-lines="" class="style-scope ytd-post-renderer"><span dir="auto" class="style-scope yt-formatted-string">Celebrate </span><a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="/results?search_query=%23nationalcheeseburgerday" dir="auto">#NationalCheeseburgerDay</a><span dir="auto" class="style-scope yt-formatted-string"> with South Park’s Cartman Burger. Watch South Park available on HBO Max!</span></yt-formatted-string>
                                                </div>
                                                <paper-button id="less" aria-expanded="true" noink="" class="style-scope ytd-expander" hidden="" role="button" tabindex="0" animated="" elevation="0" aria-disabled="false"><!--css-build:shady-->
                                                    <span class="less-button style-scope ytd-post-renderer" slot="less-button"></span>
                                                 </paper-button>
                                                <paper-button id="more" aria-expanded="false" noink="" class="style-scope ytd-expander" role="button" tabindex="0" animated="" elevation="0" aria-disabled="false" hidden=""><!--css-build:shady-->
                                                    <span class="more-button style-scope ytd-post-renderer" slot="more-button"></span>
                                                </paper-button>
                                            </ytd-expander>
                                            <yt-formatted-string id="home-content-text" slot="content" split-lines="" class="style-scope ytd-post-renderer"><span dir="auto" class="style-scope yt-formatted-string">Celebrate </span><a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="/results?search_query=%23nationalcheeseburgerday" dir="auto">#NationalCheeseburgerDay</a><span dir="auto" class="style-scope yt-formatted-string"> with South Park’s Cartman Burger. Watch South Park available on HBO Max!</span></yt-formatted-string>
                                        </div>
                                    </div> 


                                    <div id="toolbar" class="style-scope ytd-post-renderer">
                                        <ytd-comment-action-buttons-renderer id="action-buttons" use-comment-icon="" class="style-scope ytd-post-renderer" action-buttons-style="desktop-toolbar"><!--css-build:shady-->
                                            <div id="toolbar" class="style-scope ytd-comment-action-buttons-renderer">
                                            <div id="reply-button" class="style-scope ytd-comment-action-buttons-renderer">
                                            </div>
                                            <span id="vote-count-left" class="style-scope ytd-comment-action-buttons-renderer" hidden="" aria-label="104 likes">
                                                104
                                            </span>
                                            <ytd-toggle-button-renderer id="like-button" class="style-scope ytd-comment-action-buttons-renderer style-text size-default" use-keyboard-focused="" button-renderer="true" is-icon-button="" has-no-text=""><a class="yt-simple-endpoint style-scope ytd-toggle-button-renderer" tabindex="-1"><yt-icon-button id="button" class="style-scope ytd-toggle-button-renderer style-text size-default"><!--css-build:shady--><button id="button" class="style-scope yt-icon-button" aria-label="Like this comment along with 104 other people" aria-pressed="false"><yt-icon class="style-scope ytd-toggle-button-renderer"><svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon">
                                                <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z" class="style-scope yt-icon"></path>
                                            </g></svg><!--css-build:shady-->
                                        
                                           </yt-icon></button></yt-icon-button></a></ytd-toggle-button-renderer>
                                            <span id="vote-count-middle" class="style-scope ytd-comment-action-buttons-renderer" aria-label="104 likes">
                                                104
                                            </span>
                                            <ytd-toggle-button-renderer id="dislike-button" class="style-scope ytd-comment-action-buttons-renderer style-text size-default" use-keyboard-focused="" button-renderer="true" is-icon-button="" has-no-text=""><a class="yt-simple-endpoint style-scope ytd-toggle-button-renderer" tabindex="-1"><yt-icon-button id="button" class="style-scope ytd-toggle-button-renderer style-text size-default"><!--css-build:shady--><button id="button" class="style-scope yt-icon-button" aria-label="Dislike this comment" aria-pressed="false"><yt-icon class="style-scope ytd-toggle-button-renderer"><svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon">
                                                <path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z" class="style-scope yt-icon"></path>
                                            </g></svg><!--css-build:shady-->
                                        
                                            </yt-icon></button></yt-icon-button><paper-tooltip class="style-scope ytd-toggle-button-renderer" role="tooltip" tabindex="-1" style="left: 329.859px; right: auto; top: 881.875px; bottom: auto;"><!--css-build:shady-->
                                            
                                        
                                            <div id="tooltip" class="style-scope paper-tooltip hidden">
                                            Dislike
                                            </div>
                                            </paper-tooltip></a></ytd-toggle-button-renderer>
                                            <div id="creator-heart" class="style-scope ytd-comment-action-buttons-renderer"></div>
                                            <div id="share-button" class="style-scope ytd-comment-action-buttons-renderer" hidden="">
                                            </div>
                                            <div id="reply-button-end" class="style-scope ytd-comment-action-buttons-renderer">
                                            <ytd-button-renderer class="style-scope ytd-comment-action-buttons-renderer force-icon-button style-text size-default" button-renderer="" use-keyboard-focused="" is-icon-button=""><a class="yt-simple-endpoint style-scope ytd-button-renderer" tabindex="-1" href="/post/Ugx1W6rsXmS9BZoRIZd4AaABCQ"><yt-icon-button id="button" class="style-scope ytd-button-renderer style-text size-default"><!--css-build:shady--><button id="button" class="style-scope yt-icon-button" aria-label="Comment"><yt-icon class="style-scope ytd-button-renderer"><svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon">
                                                <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" class="style-scope yt-icon"></path>
                                                <path d="M0 0h24v24H0z" fill="none" class="style-scope yt-icon"></path>
                                            </g></svg><!--css-build:shady-->
                                        
                                            </yt-icon></button></yt-icon-button><yt-formatted-string id="text" class="style-scope ytd-button-renderer style-text size-default" aria-label="6 comments">6</yt-formatted-string><paper-tooltip class="style-scope ytd-button-renderer" role="tooltip" tabindex="-1" style="left: 481.766px; right: auto; bottom: 3158.62px; top: auto;"><!--css-build:shady-->
                                            
                                        
                                            <div id="tooltip" class="style-scope paper-tooltip hidden">
                                            Comment
                                            </div>
                                            </paper-tooltip></a></ytd-button-renderer></div>
                                            </div>
                                            <div id="reply-dialog" class="style-scope ytd-comment-action-buttons-renderer"></div>
                                        </ytd-comment-action-buttons-renderer>
                                        <div id="action-menu" class="style-scope ytd-post-renderer">
                                            <ytd-menu-renderer class="style-scope ytd-post-renderer" menu-active=""><!--css-build:shady-->
                                                <div id="top-level-buttons" class="style-scope ytd-menu-renderer"></div>
                                                <yt-icon-button id="button" class="dropdown-trigger style-scope ytd-menu-renderer"><!--css-build:shady-->
                                                    <button id="button" class="style-scope yt-icon-button" aria-label="Action menu">
                                                        <yt-icon class="style-scope ytd-menu-renderer"><svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon">
                                                            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" class="style-scope yt-icon"></path>
                                                            </g></svg><!--css-build:shady-->
                                                        </yt-icon>
                                                    </button>
                                                    <paper-ripple class="style-scope yt-icon-button circle"><!--css-build:shady-->
                                                        <div id="background" class="style-scope paper-ripple" style="opacity: 0.0093;"></div>
                                                        <div id="waves" class="style-scope paper-ripple"></div>
                                                    </paper-ripple>
                                                </yt-icon-button>
                                            </ytd-menu-renderer>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div id="dismissed" class="style-scope ytd-post-renderer">
                                    <div id="dismissed-content" class="style-scope ytd-post-renderer"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div id="button-container" class="style-scope ytd-rich-shelf-renderer" hidden>
                </div>
            </div>
            <div id="dismissed" class="style-scope ytd-rich-shelf-renderer">
            </div>
        </div>
    </div>
           `;

  const res = await fetch(
    // Response from GET request to server for all channels
    "https://us-central1-tube-hunt.cloudfunctions.net/app/api/channels"
  );

  const channels = await res.json(); // Channels array

  //   This is the function to inject channel HTML on the Home Page
  const inject = () => {
    // console.log(channels);
    let mainPage = document.querySelector("#contents");
    mainPage.prepend(channelSection);
    first_load = false;
  };

  inject();

  const body = document.getElementsByTagName("body")[0];
  body.addEventListener("yt-navigate", function (event) {
    console.log(`in event listener ${first_load}`);
    if (first_load === false) {
      inject();
    }
  });
})();

console.log("loaded the script!");
