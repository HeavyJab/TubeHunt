import React from 'react';
import FeedbackButton from '../FeedbackButton';
import SignInButton from '../SignInButton';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { authToFirebase } from '../authentication';

const submitFeedbackFn = feedbackString =>
  firebase.firestore()
    .doc('foo/bar')
    .set({
      feedbackMessage: feedbackString,
      submissionTime: new firebase.firestore.Timestamp.now()
    });

const App = () => (
  <div>
    <SignInButton authFn={authToFirebase} />
    <FeedbackButton handleFeedbackSubmitFn={submitFeedbackFn} />
  </div>
);

export default App;
