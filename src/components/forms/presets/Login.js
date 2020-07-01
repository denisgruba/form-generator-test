export default {
  scope: 'login',
  fields: [
    {
      type: 'email',
      label: 'Username',
      model: 'username',
      validate: ['email'],
      required: true,
      autocomplete: 'username email',
    },
    {
      type: 'password',
      label: 'Password',
      model: 'password',
      required: true,
      autocomplete: 'current-password',
    },
    {
      type: 'toggle',
      label: 'Remember Me?',
      model: 'rememberMe',
    },
  ],
};
