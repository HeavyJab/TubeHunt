import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import ChannelSubmitButton from './index';

describe('ChannelSubmitButton', () => {

  const mockSubmitFn = jest.fn(input => Promise.resolve(input));
  test('shows input area when clicked', async () => {
    const inputChannel = 'my/channel/url';

    const { getByText, getByLabelText } = render(
      <ChannelSubmitButton
        channelSubmitFn={ mockSubmitFn }
      />
    );

    await userEvent.type(
      getByLabelText('Channel URL'),
      inputChannel
    );

    userEvent.click(getByText('Submit'));

    expect(mockSubmitFn).toHaveReturnedTimes(1);
    expect(mockSubmitFn).toBeCalledWith(inputChannel);
  });
});
