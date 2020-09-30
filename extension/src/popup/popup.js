import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCUY5bnDpFKFrHh6btLHNt5MT6PHIZBSyk",
  authDomain: "tube-hunt.firebaseapp.com",
  databaseURL: "https://tube-hunt.firebaseio.com",
  projectId: "tube-hunt",
  storageBucket: "tube-hunt.appspot.com",
  messagingSenderId: "221785724000",
  appId: "1:221785724000:web:ddb952871d9a069d549f05",
  measurementId: "G-H7E9TDZVNB"
};

const auth = firebase.initializeApp(firebaseConfig).auth();

function startAuth(interactive) {
  // Request an OAuth token from the Chrome Identity API.
  chrome.identity.getAuthToken({interactive: !!interactive}, (token) => {
    if (chrome.runtime.lastError && !interactive) {
      console.log('It was not possible to get a token programmatically.');
    } else if(chrome.runtime.lastError) {
      console.error(chrome.runtime.lastError.message);
    } else if (token) {
      // Authorize Firebase with the OAuth Access Token.
      var credential = firebase.auth.GoogleAuthProvider.credential(null, token);
      auth.signInWithCredential(credential).catch(function(error) {
        // The OAuth token might have been invalidated. Lets' remove it from cache.
        if (error.code === 'auth/invalid-credential') {
          chrome.identity.removeCachedAuthToken({token: token}, function() {
            startAuth(interactive);
          });
        }
      });
    } else {
      console.error('The OAuth Token was null');
    }
  });
}

const SignIn = () => {
  return (
    <button onClick={() => startAuth(true)}>Sign In</button>
  )
}

const SignOut = () => {
  return (
    <button onClick={() => auth.signOut()}>Sign Out</button>
  )
}

const App = () => {
  const [user, setUser] = useState(auth.currentUser)

  auth.onAuthStateChanged((FBUser) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { user: FBUser }, (response) => {
        // console.log(response.farewell);
      });
    });
    
    setUser(FBUser);
  });
  
  return user ? (
    <>
      <h1>{user.displayName}</h1>
      <h3>{user.uid}</h3>
      <h3>{user.xa}</h3>
      <SignOut></SignOut>
    </>
  ) : (
    <>
      <h1>Nothing</h1>
      <SignIn></SignIn>
    </>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<App />, document.getElementById("root"));
});


