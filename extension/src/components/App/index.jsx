import React from 'react';
import FeedbackButton from '../FeedbackButton';
import SignInButton from '../SignInButton';
import * as firebase from 'firebase/app';
import 'firebase/firestore';

const submitFeedbackFn = feedbackString =>
  firebase.firestore()
    .doc('foo/bar')
    .set({
      feedbackMessage: feedbackString,
      submissionTime: new firebase.firestore.Timestamp.now()
    });

const App = () => (
  <div>
    <SignInButton />
    <FeedbackButton handleFeedbackSubmitFn={submitFeedbackFn} />
  </div>
);

export default App;
