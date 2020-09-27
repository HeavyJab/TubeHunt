import React from 'react';
import SubmittableTextInput from '../SubmittableTextInput';

const App = () => (
  <div>
    <SubmittableTextInput
      labelText={'Feedback'}
      submitFn={_ => Promise.resolve(_)} />
  </div>
);

export default App;
