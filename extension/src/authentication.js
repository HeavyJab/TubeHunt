
function initAuthentication() {
  firebase.auth().onAuthStateChanged(user => {
    // firebase.User
    // https://firebase.google.com/docs/reference/js/firebase.User
    user ? handleSignIn(user) : handleSignOut();

    document.getElementById('quickstart-button').disabled = false;
  });

  document.getElementById('quickstart-button').addEventListener('click', startSignIn, false);
}

const handleSignOut = () => {
  document.getElementById('quickstart-button').textContent = 'Sign-in with Google';
  document.getElementById('quickstart-sign-in-status').textContent = 'Signed out';
  document.getElementById('quickstart-account-details').textContent = 'null';

  profileImage = document.getElementById('profile-image');
  profileImage.style.display = 'hidden';
  profileImage.src = "";
}

const handleSignIn = user => {
  document.getElementById('quickstart-button').textContent = 'Sign out';
  document.getElementById('quickstart-sign-in-status').textContent = 'Signed in';
  document.getElementById('quickstart-account-details').textContent = JSON.stringify(user, null, '  ');

  // Display user profile image
  var profileImage = user.photoURL;

  if(profileImage) {
    profileImage = document.getElementById('profile-image');
    profileImage.style.display = 'block';
    profileImage.src = user.photoURL;
  }
}

function startAuth(interactive) {
  // Request an OAuth token from the Chrome Identity API.
  chrome.identity.getAuthToken({interactive: !!interactive}, function(token) {
    if (chrome.runtime.lastError && !interactive) {
      console.log('It was not possible to get a token programmatically.');
    } else if(chrome.runtime.lastError) {
      console.error(chrome.runtime.lastError.message);
    } else if (token) {
      // Authorize Firebase with the OAuth Access Token.
      var credential = firebase.auth.GoogleAuthProvider.credential(null, token);
      firebase.auth().signInWithCredential(credential).catch(function(error) {
        // The OAuth token might have been invalidated. Lets' remove it from cache.
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
              alert(response.farewell);
          });
        });
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

function startSignIn() {
  document.getElementById('quickstart-button').disabled = true;
  if (firebase.auth().currentUser) {
    firebase.auth().signOut();
  } else {
    startAuth(true);
  }
}

// window.onload = function() {
//   initAuthentication();
// };

export default initAuthentication;
