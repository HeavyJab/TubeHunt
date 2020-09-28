import React from 'react';
import FeedbackButton from '../FeedbackButton';

const App = () => (
  <FeedbackButton handleFeedbackSubmitFn={() => Promise.resolve()} />
);

export default App;
