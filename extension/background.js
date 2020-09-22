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

firebase.initializeApp(firebaseConfig);

function initApp() {
  firebase.auth().onAuthStateChanged(function(user) {
    console.log('User state change detected from the Background script of the Chrome Extension:', user);
  });
}

window.onload = function() {
  initApp();
};
