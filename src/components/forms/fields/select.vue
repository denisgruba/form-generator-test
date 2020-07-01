<template>
  <VSelect
    v-model="localValue"
    v-validate="computeValidator"
    v-bind="attributes"
  />
</template>

<script>

import field from '@/components/forms/mixins/field';
import input from '@/components/forms/mixins/input';

export default {
  name: 'SelectField',
  mixins: [field, input],
  computed: {
    attributes () {
      return {
        ...this.additionalAttributes ? this.additionalAttributes : {},
        'data-vv-as': this.field.label || this.field.placeholder,
        'data-vv-name': this.field.label || this.uuid,
        'data-vv-scope': this.scope,
        validationErrors: this.errorMessages,
        label:  this.field.label ? `${this.field.label}${this.field.required ? '*' : ''}` : null,
        items: this.field.items,
        disabled: this.field.disabled,
        multiselect: this.field.multiselect,
        searchKey: this.field.searchKey || 'name',
        placeholder: this.field.placeholder,
        tooltip: this.field.tooltip,
        autocomplete: this.field.autocomplete,
        field: {
          form: this.scope,
          readonly: this.field.readonly,
          required: this.field.required,
        },
      };
    },
  },
};
</script>
