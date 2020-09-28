import React, { useState } from 'react';
import SubmittableTextInput from '../SubmittableTextInput';
import LoveFeedback from './loveFeedback.svg';

// TODO: credit creator from flaticon.com
/*
  <div>
    Icons made by
    <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a>
    from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
  </div>
*/

export type FeedbackButtonProps = {
  handleFeedbackSubmitFn: (s: string) => Promise<void>
}

const FeedbackButton = ({
  handleFeedbackSubmitFn
}: FeedbackButtonProps): JSX.Element => {
  const [showFeedbackInput, setShowFeedbackInput] = useState(false);

  const handleFeedbackSubmit = async (str: string): Promise<void> => {
    try {
      await handleFeedbackSubmitFn(str);
      console.log(`Received dummy feedback!: ${str}`);

      setShowFeedbackInput(false);
    } catch (error) {
      console.error(error);
    }
  };

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
            submitFn={handleFeedbackSubmit}
          />
        ) : null
      }
    </div>
  );
};

export default FeedbackButton;
