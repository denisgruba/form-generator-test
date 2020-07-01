<template>
  <VCheckbox
    v-model="localValue"
    v-validate="computeValidator"
    v-bind="attributes"
  />
</template>

<script>

import field from '@/components/forms/mixins/field';

export default {
  name:     'CheckboxField',
  mixins:   [field],
  computed: {
    attributes () {
      return {
        'data-vv-as':     this.field.label,
        'data-vv-name':   this.field.label,
        'data-vv-scope':  this.scope,
        validationErrors: this.errorMessages,
        field:            {
          label: this.field.label,
        },
        required:         this.field.required,
        disabled: this.field.disabled,
      };
    },
  },
};
</script>
