<template>
  <VForm
    @submit="submit"
  >
    <VLayout
      row
      wrap
    >
      <VCol
        v-for="(field, fieldIndex) in activeSchema"
        :key="`formItem-${field.model}${fieldIndex}`"
        :class="size(field.sizes)"
        class="pb-0"
        xs="12"
      >
        <FormField
          v-model="localValue[field.model]"
          :field="field"
          :available-field-types="availableFieldTypes"
          @hasErrors="hasErrors(field.model, $event)"
          @isValid="isValid(field.model, $event)"
        />
      </VCol>
    </VLayout>
    <input
      type="submit"
      value="Submit"
      class="hidden"
    >
  </VForm>
</template>

<script>
import model from '@/mixins/model';
import FormField from '@/components/forms/FormField';
import availableFieldTypes from '@/components/forms/mixins/availableFieldTypes';
import size from '@/components/forms/mixins/size';
import formGeneratorValidation from '@/components/forms/mixins/formGeneratorValidation';

export default {
  name:       'SimpleForm',
  components: {
    FormField,
  },
  mixins:     [model, availableFieldTypes, size, formGeneratorValidation],
  props:      {
    schema:             {
      type:    Object,
      default: () => (
        {}
      ),
    },
    options:            {
      type:    Object,
      default: () => (
        {}
      ),
    },
    omitSubmitValidate: {
      type:    Boolean,
      default: false,
    },
    preset:             {
      type:    String,
      default: '',
    },
  },
  data () {
    return {
      activeSchema: [],
    };
  },
  methods:    {
    onBlur () {

    },
    onChange () {

    },
    onFocus () {

    },
    onInput () {

    },
    submit () {
      if (this.omitSubmitValidate) {
        this.$emit('submit', this.localValue);
        return;
      }
      if (this.isFormValid) {
        this.$emit('submit', this.localValue);
      } else {
        this.$notify.alert('Form cannot be submitted, some fields are invalid.');
      }
    },
  },
  watch:      {
    preset: {
      async handler (newValue) {
        if (newValue) {
          const importedSchema = await import(`@/components/forms/presets/${newValue}.js`);
          this.activeSchema = importedSchema.default;
        } else {
          this.activeSchema = this.schema;
        }
      },
      immediate: true,
    },
  },
};
</script>
