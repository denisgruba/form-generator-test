<template>
  <VTextField
    v-model="localValue"
    v-validate="computeValidator"
    v-bind="attributes"
  />
</template>

<script>
import { VTextField } from 'vuetify/lib'
import field from '@/components/forms/mixins/field';
import input from '@/components/forms/mixins/input';

export default {
  name:   'TextField',
  mixins: [field, input],
  components: { VTextField }
};
</script>
