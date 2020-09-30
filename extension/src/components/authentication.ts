/*
Uses the chrome.identity api to retrieve and user access token,
which can then be used to sign the user into our application.
*/

export type AuthSuccessHandler = (firebaseCredential: firebase.auth.UserCredential) => void
export type AuthErrorHandler = (err: firebase.auth.UserCredential) => void

interface BaseAuthResult {
  status: string;
}

export interface SuccessAuthResult extends BaseAuthResult {
  status: 'AUTH_SUCCESS';
  userCredential: firebase.auth.UserCredential
}

export interface FailureAuthResult extends BaseAuthResult {
  status: 'AUTH_FAILURE';
  error: { code?: string; message: string }
}

export type AuthResult = SuccessAuthResult | FailureAuthResult

const createAuthSuccess = (userCred: firebase.auth.UserCredential): AuthResult => ({
  status: 'AUTH_SUCCESS',
  userCredential: userCred
});

const createAuthFailure = (message: string, code?: string): AuthResult => ({
  status: 'AUTH_FAILURE',
  error: { message, code }
});

export const authToFirebase = (
  onSuccessFn: AuthSuccessHandler,
  onErrorFn: AuthErrorHandler
): AuthResult => {
  const interactive = true;

  let result: AuthResult = createAuthFailure('An error occurred signing you in!'); // Default to failure

  try {
    chrome.identity.getAuthToken({interactive: interactive}, (token: string) => {
      if(token == undefined) {
        result = createAuthFailure('Error retrieving your token from Chrome.');
      } else if (chrome.runtime.lastError && !interactive) {
        result = createAuthFailure('It was not possible to get a token programmatically.');
      } else if(chrome.runtime.lastError) {
        result = createAuthFailure(chrome.runtime.lastError.message);
      } else if (token) {
        // Authorize Firebase with the OAuth Access Token.
        const credential = firebase.auth.GoogleAuthProvider.credential(null, token);

        return firebase.auth().signInWithCredential(credential)
          .then(
            successCredential => createAuthSuccess(successCredential),
            err => {
              // The OAuth token might have been invalidated. Lets' remove it from cache.
              if (err.code === 'auth/invalid-credential') {
                chrome.identity.removeCachedAuthToken({token: token}, function() {
                  result = authToFirebase(onSuccessFn, onErrorFn); // Retry on errors
                });
              } else {
                result = createAuthFailure(err);
              }
            });
      } else {
        return createAuthFailure('The OAuth Token was null');
      }
    });
  } catch (error) {
    result = createAuthFailure('It was not possible to get a token programmatically.');
  }

  return result;
};
