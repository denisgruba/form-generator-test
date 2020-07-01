<template>
  <VIinput
    v-model="localValue"
    v-validate="computeValidator"
    v-bind="attributes"
  />
</template>

<script>

import field from '@/components/forms/mixins/field';
import input from '@/components/forms/mixins/input';

export default {
  name:     'PasswordField',
  mixins:   [field, input],
  computed: {
    type () {
      return this.showPassword ? 'text' : 'password';
    },
    autocomplete () {
      return this.field.autocomplete ? 'current-password' : 'off';
    },
  },
  data () {
    return {
      appendIcon:   ['fas', 'eye'],
      appendCb:     () => {
        this.showPassword = !this.showPassword;
      },
      showPassword: false,
    };
  },
};
</script>
