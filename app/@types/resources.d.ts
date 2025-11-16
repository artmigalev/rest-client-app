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
      history: 'History';
      'rest-client': 'Client';
      variables: 'Variables';
    };
  };
  welcome: {
    about: {
      list: [
        'Authorization and authentication capabilities ensure that access to the tool is limited to authorized users.',
        'A history section that will redirect the user to a specific section for previously performed queries.',
      ];
      'title-section': 'This application includes:';
    };
    'app-description': '- a lightweight and easy-to-use client for consuming (and developing) the API.';
    greeting: 'Welcome !';
    'rest-full-structure': [
      'Method selector',
      'Input method for URL endpoint',
      'Request editor',
      'Headers editor',
      'Response Section',
      'Section generate code',
    ];
    structure: {
      list: [
        'Main Page',
        'User Registration/Authentication Pages.',
        'REST client, which includes:',
        'Variables',
        'History',
      ];
      'title-section': 'Application structure:';
    };
    'technical-requirements': {
      list: [
        'Semantic markup ',
        'The application runs in the latest version of the Google Chrome',
        'Private routes, a 404 page, and error boundaries are implemented',
        'React v 19 was used in development',
        'React Router 7(framework mode)',
        'TypeScript',
        'No more the three fonts per page',
        'Interactivity of elements all application pages (identical fonts, button styles, indents, and identical elements on all application pages have the same appearance and placement)',
      ];
      'title-section': 'When developing this application, the following technical requirements were met:: ';
    };
  };
}

export default Resources;
