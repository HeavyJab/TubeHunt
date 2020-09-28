import React, { useState } from 'react';

export type SubmittableTextInputProps = {
  labelText: string;
  submitFn: (input: string) => Promise<void>;
}

const SubmittableTextInput = ({
  labelText,
  submitFn
}: SubmittableTextInputProps): JSX.Element => {

  const [textInput, setTextInput] = useState('');

  return (
    <div>
      <label htmlFor={'primaryTextField'}>{labelText}</label>
      <input
        id={'primaryTextField'}
        type='text'
        value={textInput}
        onChange={e => setTextInput(e.target.value)}
      />
      <button onClick={() => submitFn(textInput)}>Submit</button>
    </div>
  );
};

export default SubmittableTextInput;
