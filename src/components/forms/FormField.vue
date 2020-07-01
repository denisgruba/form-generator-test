<template>
  <component
    :is="getImportedComponent(field.type)"
    ref="field"
    v-model="localValue"
    :field="field"
    :scope="scope"
    @hasErrors="hasErrors"
    @isValid="isValid"
  />
</template>

<script>
import model from '@/mixins/model';

export default {
  name: 'FormField',
  mixins: [model],
  defaultComponent: 'text',
  props: {
    field: {
      type: Object,
      default: () => (
        {}
      ),
    },
    availableFieldTypes: {
      type: Array,
      default: () => ([]),
    },
    scope: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      importedComponents: {},
    };
  },
  methods: {
    isValid(value) {
      this.$emit('isValid', value);
    },
    hasErrors(value) {
      this.$emit('hasErrors', value);
    },
    componentName(name) {
      if (this.availableFieldTypes.includes(name)) {
        return name;
      } else {
        return this.$options.defaultComponent;
      }
    },
    reset() {
      if (this.$refs.field) this.$refs.field.reset();
    },
    getImportedComponent(type) {
      const name = this.componentName(type);
      if (this.importedComponents[name]) {
        return this.importedComponents[name];
      } else {
        const importComponent = () => (
          {
            component: import(`@/components/forms/fields/${name}`),
          }
        );
        this.$set(this.importedComponents, name, importComponent);
        return this.importedComponents[name];
      }
    },
  },
  beforeDestroy() {
    this.$emit('destroy');
  },
};
</script>
