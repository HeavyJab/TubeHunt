import React, { useEffect, useState } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { AuthSuccessHandler, AuthErrorHandler, AuthResult, AuthStatus } from '../authentication';

type AppUser = firebase.UserInfo | null;

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
      case AuthStatus.Success:
        setAppUser(authResult.user);
        break;
      case AuthStatus.Failure:
        console.log(
          `Error: Unable to authenticate user: ${authResult.error.message}, ${authResult.error.code}`
        );
        break;
    }
  }, []);

  return appUser ? (
    <div data-testid="profile-img-test-id" id="profile-image-container">
      <img src={appUser.photoURL} id="profile-image" />
    </div>
  ) : (
    <button>Sign in using Google!</button>
  );
};

export default SignInButton;
