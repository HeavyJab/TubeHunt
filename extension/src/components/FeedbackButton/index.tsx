import React from 'react';
import SubmittableTextInput from '../SubmittableTextInput';

const FeedbackButton = (): JSX.Element => {
  return (
    <SubmittableTextInput
      labelText={'Got some feedback for us? We\'d love to hear it!'}
      submitFn={() => Promise.resolve() }
    />
  );
};

export default FeedbackButton;
