import 'i18next';

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
  welcome: {
    greeting: 'Welcome!';
  };
}

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: {
      header: {
        login: string;
        register: string;
      };
      login: {
        button: {
          label: string;
        };
        password: {
          label: string;
          maxLength: string;
          minLength: string;
          placeholder: string;
          required: string;
        };
        username: {
          label: string;
          maxLength: string;
          minLength: string;
          placeholder: string;
          required: string;
        };
      };
      welcome: {
        greeting: string;
      };
    };
  }
}
export default Resources;
