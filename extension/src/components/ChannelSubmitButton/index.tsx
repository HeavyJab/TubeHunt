import React from 'react';
import SubmittableTextInput from '../SubmittableTextInput';

export interface ChannelSubmitButtonProps {
  channelSubmitFn(s: string): Promise<void>;
}

const ChannelSubmitButton = ({
  channelSubmitFn
}: ChannelSubmitButtonProps): JSX.Element => {
  const handleChannelSubmit = async (str: string): Promise<void> => {
    try {
      console.log(`INFO: Submitting channel: ${str}`);
      await channelSubmitFn(str);
    } catch (err) {
      console.log(`ERROR: Something went wrong submitting channel${str}: ${err}`);
    }
  };

  return (
    <div>
      <SubmittableTextInput
        labelText={'Channel URL'}
        submitFn={handleChannelSubmit}
      />
    </div>
  );
};

export default ChannelSubmitButton;
