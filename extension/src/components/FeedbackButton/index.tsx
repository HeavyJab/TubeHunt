import React, { useState } from 'react';
import SubmittableTextInput from '../SubmittableTextInput';
import { ReactComponent as LoveFeedback } from './loveFeedback.svg';

// TODO: credit creator from flaticon.com
// <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

const FeedbackButton = (): JSX.Element => {
  const [showFeedbackInput, setShowFeedbackInput] = useState(false);

  return (
    <div>
      <button
        data-testid="feedback-icon"
        style={{
          width: '36px',
          backgroundColor: 'transparent'
        }}
        onClick={() => setShowFeedbackInput(!showFeedbackInput) }>
        <LoveFeedback />
      </button>
      {
        showFeedbackInput ? (
          <SubmittableTextInput
            labelText={'Got some feedback for us? We\'d love to hear it!'}
            submitFn={() => Promise.resolve() }
          />
        ) : null
      }
    </div>
  );
};

export default FeedbackButton;
