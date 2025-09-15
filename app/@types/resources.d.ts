interface Resources {
  header: {
    login: 'Войти';
    register: 'Зарегистрироваться';
  };
  login: {
    button: {
      label: 'Войти';
    };
    password: {
      label: 'Пароль';
      maxLength: 'Имя пользователя должно быть не более 20 букв';
      minLength: 'Имя пользователя должно быть не менее 8 букв';
      placeholder: 'Введите пароль';
      required: 'Пароль обязателен';
    };
    username: {
      label: 'Имя пользователя';
      maxLength: 'Имя пользователя должно быть не более 20 символов';
      minLength: 'Имя пользователя должно быть не менее 3 символов';
      placeholder: 'Введите имя пользователя';
      required: 'Имя пользователя обязательно';
    };
  };
  menu: {
    menu: {
      history: 'История';
      'rest-client': 'Rest Клиент';
      variables: 'Переменные';
    };
  };
  register: {
    button: {
      label: 'Зарегистрироваться';
    };
    error: {
      firstName: {
        message: {
          maxLength: 'Имя должно  быть не более 20 символов';
          minLength: 'Имя должно быть не менее 3 символов';
          required: 'Имя обязательно';
        };
      };
      lastName: {
        message: {
          maxLength: 'Фамилия должна  быть не более 20 символов';
          minLength: 'Фамилия должна быть не менее 3 символов';
          required: 'Фамилия обязательна';
        };
      };
      password: {
        message: {
          maxLength: 'Пароль должно быть не более 20 букв';
          minLength: 'Пароль должно быть не менее 8 букв';
          required: 'Пароль обязателен';
        };
      };
      username: {
        message: {
          maxLength: 'Имя пользователя должно быть не более 20 символов';
          minLength: 'Имя пользователя должно быть не менее 3 символов';
          required: 'Имя пользователя обязательно';
        };
      };
    };
    firstName: {
      label: 'Имя пользователя';
      placeholder: 'Введите имя пользователя';
    };
    lastName: {
      label: 'Фамилия пользователя';
      placeholder: 'Введите фамилию пользователя';
    };
    password: {
      label: 'Пароль';
      placeholder: 'Введите пароль';
    };
    username: {
      label: 'Имя пользователя';
      placeholder: 'Введите имя пользователя';
    };
  };
  welcome: {
    greeting: 'Добро Пожаловать!';
  };
}

export default Resources;
