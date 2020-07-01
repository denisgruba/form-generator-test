<template>
  <div>
    <p>{{ attributes.label }}</p>
    <VRadio
      v-model="localValue"
      v-validate="computeValidator"
      v-bind="attributes"
    />
  </div>
</template>

<script>

import field from '@/components/forms/mixins/field';

export default {
  name: 'RadioField',
  mixins: [field],
  computed: {
    attributes() {
      return {
        'data-vv-as': this.field.label,
        'data-vv-name': this.field.label,
        'data-vv-scope': this.scope,
        validationErrors: this.errorMessages,
        label: this.field.label,
        field: {
          group: this.field.group,
          options: this.field.options,
        },
        required: this.field.required,
        tooltip: this.field.tooltip,
      };
    },
  },
};
</script>
