<template>
  <VInput
    v-model.number="localValue"
    v-validate="computeValidator"
    v-bind="attributes"
  />
</template>

<script>

import field from '@/components/forms/mixins/field';
import input from '@/components/forms/mixins/input';

export default {
  name: 'NumberField',
  mixins: [field, input],
};
</script>
