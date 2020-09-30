import React from 'react';
import FeedbackButton from '../FeedbackButton';
import SignInButton from '../SignInButton';
import * as firebase from 'firebase/app';
import 'firebase/firestore';

const App = () => (
  <div>
    <SignInButton />
    <FeedbackButton handleFeedbackSubmitFn={submitFeedbackFn} />
  </div>
);

export default App;
