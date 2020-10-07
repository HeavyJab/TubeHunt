import React from 'react';
import SubmittableTextInput from '../SubmittableTextInput';
import { useEffect, useState } from 'react';

export interface ChannelSubmitButtonProps {
  channelSubmitFn(s: string): Promise<void>;
}

const ChannelSubmitButton = ({
  channelSubmitFn
}: ChannelSubmitButtonProps): JSX.Element => {
  const [currentTabUrl, setCurrentTabUrl] = useState<string>('');

  const handleChannelSubmit = async (str: string): Promise<void> => {
    try {
      console.log(`INFO: Submitting channel: ${str}`);
      await channelSubmitFn(str);
    } catch (err) {
      console.log(`ERROR: Something went wrong submitting channel${str}: ${err}`);
    }
  };

  useEffect(() => {
    chrome.tabs.query(
      { active: true, currentWindow: true },
      tabs => setCurrentTabUrl(tabs[0].url)
    );
  }, []);

  return (
    <div>
      <SubmittableTextInput
        labelText={'Channel URL'}
        submitFn={handleChannelSubmit}
        overrideValue={currentTabUrl}
        overrideChangeHandler={setCurrentTabUrl}
      />
    </div>
  );
};

export default ChannelSubmitButton;
