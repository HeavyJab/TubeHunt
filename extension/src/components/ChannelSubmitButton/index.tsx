import React from 'react';
import SubmittableTextInput from '../SubmittableTextInput';
import { useEffect, useState } from 'react';

export interface ChannelSubmitButtonProps {
  channelSubmitFn(s: string): Promise<void>;
}

const ChannelSubmitButton = ({
  channelSubmitFn
}: ChannelSubmitButtonProps): JSX.Element => {
  const [currentTabUrl, setCurrentTabUrl] = useState<string>('xxx');

  const handleChannelSubmit = async (str: string): Promise<void> => {
    try {
      console.log(`INFO: Submitting channel: ${str}`);
      await channelSubmitFn(str);
    } catch (err) {
      console.log(`ERROR: Something went wrong submitting channel${str}: ${err}`);
    }
  };

  useEffect(() => {
    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
      console.log('url:', tabs);
      const url = tabs[0].url;
      console.log('url:', url);
      setCurrentTabUrl(url);
    });
  }, []);

  return (
    <div>
      <button onClick={() => setCurrentTabUrl(new Date().getMilliseconds().toString())}>click</button>
      <p>{currentTabUrl}</p>
      <SubmittableTextInput
        labelText={'Channel URL'}
        submitFn={handleChannelSubmit}
        overrideValue={currentTabUrl}
      />
    </div>
  );
};

export default ChannelSubmitButton;
