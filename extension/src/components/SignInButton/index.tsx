import React, { useEffect, useState } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { AuthSuccessHandler, AuthErrorHandler, AuthResult } from '../authentication';

type AppUser = firebase.User | null;

type AuthenticationFn = (as: AuthSuccessHandler, ae: AuthErrorHandler) => AuthResult

type SignInButtonProps = {
  authFn: AuthenticationFn
}

const SignInButton = ({ authFn }: SignInButtonProps): JSX.Element => {

  const [appUser, setAppUser] = useState<AppUser>(null);

  useEffect(() => {
    const successHandler: AuthSuccessHandler = firebaseCred => setAppUser(firebaseCred.user);
    const errorHandler: AuthErrorHandler = err => console.error(err);

    const authResult = authFn(successHandler, errorHandler);

    switch (authResult.status) {
      case 'AUTH_SUCCESS':
        setAppUser(authResult.userCredential.user);
        break;
      case 'AUTH_FAILURE':
        console.error(`Error: Error authenticating user: ${authResult.error}`);
        break;
    }
  });

  return appUser ? (
    <div id="profile-image-container">
      <img src={appUser.photoURL} id="profile-image" />
    </div>
  ) : (
    <button>Sign in using Google!</button>
  );
};

export default SignInButton;
