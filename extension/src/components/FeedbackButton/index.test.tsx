import React from 'react';
import SubmittableTextInput from './index';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom';
import FeedbackButton from './index';

describe('FeedbackButton', () => {
  test('shows input area when clicked', () => {
    const expectedFeedbackCopy = 'Got some feedback for us? We\'d love to hear it!'
    const { getByTestId } = render(
      <FeedbackButton />
    );

    userEvent.click(getByTestId('feedback-icon'));

    expect(expectedFeedbackCopy).toBeInTheDocument();
  });

  // test('calls feexdbackSubmissionFn with input text on click', () => {
  //   const { getByLabelText } = render(
  //     <SubmittableTextInput {...testProps} />
  //   );
  //   const testUserInput = 'my cool input';

  //   userEvent.type(getByLabelText(new RegExp(testProps.labelText)), testUserInput)
  //     .then(() => {
  //       userEvent.click(screen.getByText('Submit'));

  //       expect(mockSubmitFn).toHaveReturnedTimes(1);
  //       expect(mockSubmitFn).toHaveBeenCalledWith(testUserInput);
  //     });
  // });
});
