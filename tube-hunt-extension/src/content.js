import React from 'react';
import ReactDOM from 'react-dom';
import './content.css';

console.log("Loaded React App!");


const Main = () => {
  return <div>Some injected content</div>
}
  

const app = document.createElement('div');
app.id = "root";

const contentSection = document.querySelector("#contents")
contentSection.prepend(app);

ReactDOM.render(
    <Main />,
  document.getElementById("root")
);

const mo = new MutationObserver(() => {
  console.log('observing!')
  if (!document.contains(app)) {
    console.log("Changing");
    inject();
  }
});

// observe changes  
const observe = () => {
  mo.observe(document.getElementById("contents"), { childList: true, subtree: true });
};

const inject = async () => {
  mo.disconnect();

  // const huntSection = document.createElement('div');
  // huntSection.setAttribute('style', 'display:flex; flex-direction: column;')

  contentSection.prepend(app);
  observe();
};

inject();
