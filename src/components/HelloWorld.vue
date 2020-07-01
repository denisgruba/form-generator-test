<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <SimpleForm :schema="loginSchema" v-model="login"></SimpleForm>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import SimpleForm from './forms/FormGenerator'

  export default {
    name: 'HelloWorld',
    components: {SimpleForm},

    computed: {
      loginSchema() {
        return {
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
        }
      }
    },

    data: () => ({
     login: {
       username: null,
       password: null,
       rememberMe: false,
     },
    }),
  }
</script>
