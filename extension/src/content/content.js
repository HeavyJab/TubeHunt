import "core-js/stable";
import "regenerator-runtime/runtime";
import React, {useState, useEffect}from 'react';
import ReactDOM from 'react-dom';
import ChannelSection from '../components/ChannelSection';
import axios from 'axios';
import {Button, VerticalSection} from '../components/Styles'
import dayjs from 'dayjs';

const root = document.createElement('div')
root.setAttribute('id', 'channel-section')
root.setAttribute('style', 'width:100%; display:flex; align-items: center; overflow: auto; flex-direction:column;')

chrome.runtime.onMessage.addListener((payload, sender, sendResponse) => {
  console.log(`Got ${sender} ${payload}`);
});

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

      let channelsSorted = {};

      channels
        .filter((channel) => dayjs(channel.dateSubmitted).isSame(dayjs(), "month"))
        .forEach((channel) => {
          const date = dayjs(channel.dateSubmitted).format("dddd DD MMM");
          if (channelsSorted[date]) {
            channelsSorted[date].push(channel);
            channelsSorted[date].sort((a, b) => {
              return b.upvotesCount - a.upvotesCount;
            });
          } else {
            channelsSorted[date] = [channel];
          }
        });

      console.log(`setting channels ${channelsSorted}`);
      setChannels(channelsSorted);
    };
    fetchChannels();

  }, []);

  return (
    <VerticalSection>
        <Button onClick={() => {setOpen(!open)}}>{open? <h3>Hunting🎉</h3> : <h3>Hunt🤞</h3> }</Button>
        {open? (<ChannelSection channels={channels}/>) : null}
    </VerticalSection>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
);

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