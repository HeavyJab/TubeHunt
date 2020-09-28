import "core-js/stable";
import "regenerator-runtime/runtime";
import React, {useState, useEffect}from 'react';
import ReactDOM from 'react-dom';
import ChannelSection from '../components/ChannelSection';
import axios from 'axios';
import {Button, VerticalSection} from '../components/Styles'

const root = document.createElement('div')
root.setAttribute('id', 'channel-section')
root.setAttribute('style', 'width:100%; display:flex; align-items: center; overflow: auto; flex-direction:column;')

const App = () => {
  const [open, setOpen] = useState(false);
  const [channels, setChannels] = useState([])

  useEffect(() => {
    console.log("channel section mounted!");
    const fetchChannels = async () => {
      const res = await axios.get(
        "https://us-central1-tube-hunt.cloudfunctions.net/app/api/channels"
      );
      const channels = res.data;
      setChannels(channels);
    };
    fetchChannels();
  }, []);

  return (
    <>
        <Button onClick={() => {setOpen(!open)}}>{open? <h3>Hunting🎉</h3> : <h3>Hunt🤞</h3> }</Button>
        {open? (<ChannelSection channels={channels}/>) : <ChannelSection channels={null}/>}
    </>
  )
}

ReactDOM.render(<App />, root);

const mainPage = document.querySelector("#contents");

// new observer
const mo = new MutationObserver(() => {
  if (!document.contains(root)) {
    console.log("Changing");
    inject();
  }
});

// observe changes
const observe = () => {
  mo.observe(mainPage, { childList: true, subtree: true });
};


  // inject channel cards immediately invoked
const inject = () => {
  mo.disconnect();

  mainPage.prepend(root);
  observe();
}

inject();


//   // create a video section html
//   const createVideosSection = async (channelId) => {
//     const videos = document.createElement("div");
//     videos.setAttribute("id", `video-section`);
//     videos.setAttribute("name", `${channelId}`);

//     const res = await fetch(
//       `https://us-central1-tube-hunt.cloudfunctions.net/app/api/videos/${channelId}`,
//       {
//         method: "get",
//       }
//     );

//     const data = await res.json()

//     if(res.status === 200) {
//       console.log(data)
//       data.videoIds.slice(0,8).forEach((videoId) => {
//         videos.innerHTML += `
//         <iframe width="250" height="170"
//         src="https://www.youtube.com/embed/${videoId}">
//         </iframe>s
//       `;
//         });
//     }

//     return videos;
//   };

//   // monitor all click events
//   window.onclick = async (event) => {
//     const target = event.target;
//     if (target.matches("#upvote")) {
//       const channelId = document.activeElement.getAttribute("name");

//       // change the view
//       let upvotesCount = document.getElementById(`upvotesCount-${channelId}`)
//         .innerText;
//       const upvotesElm = document.getElementById(`upvotesCount-${channelId}`);
//       upvotesCount = parseInt(upvotesCount) + 1;
//       upvotesElm.innerHTML = upvotesCount;

//       // change model
//       const res = await fetch(
//         `https://us-central1-tube-hunt.cloudfunctions.net/app/api/${channelId}/upvote`,
//         {
//           method: "get",
//         }
//       );
//       console.log("Upvoted!");
//     }

//     // show videos
//     if (target.matches("#show")) {
//       console.log("clicked!!!!");
//       const channelId = document.activeElement.getAttribute("name");

//       if (showVideos) {
//         console.log("contains channel-section");
//         if (
//           document.getElementById("video-section").getAttribute("name") != channelId
//         ) {
//           document.getElementById("video-section").remove();
//           const videos = await createVideosSection(channelId);
//           showVideos = videos
//           injectVideos(videos);
//         } else {
//           showVideos = false;
//           document.getElementById("video-section").remove();
//         }
//         // if there is no showVideos
//       } else {
//         const videos = await createVideosSection(channelId);
//         showVideos = videos
//         injectVideos(videos);
//       }
//     }

//     // toggle more channels
//     if (target.matches("#toggle")) {
//       if(showingChannels){
//         document.querySelector('.section.collapsible').classList.toggle('collapsed');
//         document.querySelector('#toggle').innerHTML = 'Hunt🤞'
//         showingChannels = false;

//       } else {
//         document.querySelector('#toggle').innerHTML = 'Hunt 🎉'
//         document.querySelector('.section.collapsible').classList.toggle('collapsed');
//         showingChannels = true;
//       }

//     }
//   };
// })();

// console.log("loaded the script!");
