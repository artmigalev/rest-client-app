interface Resources {
  auth: {
    button: 'submit';
    errors: {
      'auth/email-already-in-use': 'The email address is already in use by another account, Please go to Sign In page';
      'auth/invalid-credential': 'The supplied auth credential is incorrect, malformed or has expired';
      'auth/invalid-email': 'The email address is badly formatted';
      'auth/network-request-failed': 'Network related error.';
      'auth/too-many-requests': 'Too many requests from this device. Account temporarily suspended..';
      'auth/user-disabled': 'User account disable .';
      'auth/user-not-found': 'The email address is already in use.';
      'auth/wrong-password': 'Incorrect password.';
    };
    navigation: {
      'sign-in': 'sign In';
      'sign-up': 'sing Up';
    };
    registerComponent: {
      email: 'email';
      password: 'password';
      username: 'username';
    };
    signInComponent: {
      email: 'email';
      password: 'password';
    };
  };
  header: {
    langs: {
      en: 'English';
      ru: 'Russian';
    };
    navigation: {
      logout: 'Sign Out';
      'sign-in': 'Sign In';
      'sign-up': 'Sing UP';
    };
  };
  menu: {
    menu: {
      history: 'history';
      'rest-client': 'RestClientApp';
      variables: 'variables';
    };
  };
}

export default Resources;
