import React, { useEffect, useState } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth';

type AppUser = firebase.User | null;

const SignInButton = (): JSX.Element => {

  const [appUser, setAppUser] = useState<AppUser>(null);

  useEffect(() => {
    // Retrieve token using chrome.identity
    const startAuth = (interactive: boolean) => {
      chrome.identity.getAuthToken({interactive: interactive}, function(token) {
        if (chrome.runtime.lastError && !interactive) {
          console.log('It was not possible to get a token programmatically.');
        } else if(chrome.runtime.lastError) {
          console.error(chrome.runtime.lastError.message);
        } else if (token) {
          // Authorize Firebase with the OAuth Access Token.
          const credential = firebase.auth.GoogleAuthProvider.credential(null, token);

          firebase.auth().signInWithCredential(credential)
            .then(
              result => {
                console.log(`User has signed in: ${result.user}`);
                setAppUser(result.user);
              },
              err => {
                // The OAuth token might have been invalidated. Lets' remove it from cache.
                if (err.code === 'auth/invalid-credential') {
                  chrome.identity.removeCachedAuthToken({token: token}, function() {
                    startAuth(interactive);
                  });
                }
              });
        } else {
          console.error('The OAuth Token was null');
        }
      });
    };

    const interactive = true;
    startAuth(interactive);
  });

  return appUser ? (
    <div id="profile-image-container">
      <img src={appUser.photoURL} id="profile-image" />
    </div>
  ) : (
    <button>Sign in using Google!</button>
  );
};

export default SignInButton;
