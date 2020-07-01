import model from '@/mixins/model';

/**
 * This is a required mixin for all the field elements, it implements all the main functionality for the fields.
 */

export default {
  inject: ['formGenerator'],
  mixins: [model],
  props: {
    field: {
      type: Object,
      default: () => ({}),
    },
    scope: {
      type: String,
      default: null,
    },
  },
  computed: {
    computeValidator () {
      let rules = [];

      if (this.field.required) {
        rules.push('required');
      }

      if (this.field.maxLength) {
        rules.push(`max:${this.field.maxLength}`);
      }

      if (this.field.minLength) {
        rules.push(`min:${this.field.minLength}`);
      }

      if (this.field.minValue || this.field.minValue === 0) {
        rules.push(`min_value:${this.field.minValue}`);
      }

      if (this.field.maxValue || this.field.maxValue === 0) {
        rules.push(`max_value:${this.field.maxValue}`);
      }

      if (this.field.items) {
        let included = 'included:';
        this.field.items.forEach(item => included += `${item.id},`);
        rules.push(included);
      }

      if (this.field.mustMatchModel) {
        rules.push(`is:${this.formGenerator.model[this.field.mustMatchModel]}`);
      }

      if (this.field.mustNotMatchModel) {
        rules.push(`is_not:${this.formGenerator.model[this.field.mustNotMatchModel]}`);
      }

      if (this.field.dateFormat) {
        rules.push(`date_format:${this.field.dateFormat}`);
      }

      if (this.field.before) {
        rules.push(`before:${this.field.before}${this.field.beforeInclusive ? ',true' : ''}`);
      }

      if (this.field.after) {
        rules.push(`after:${this.field.after}${this.field.afterInclusive ? ',true' : ''}`);
      }

      if (this.field.validate) {
        rules = [...rules, ...this.field.validate];
      }

      return rules.join('|');
    },
    isValid () {
      let result = true;
      if (this.field.required) {
        if (this.field.type === 'select' && Array.isArray(this.localValue)) {
          result = this.localValue.length > 0;
        } else {
          if (!this.localValue) {
            result = false;
          }
        }
      }
      if (this.errors.has(this.field.label || this.uuid, this.scope)) {
        result = false;
      }

      if (this.loading) {
        result = false;
      }

      return result;
    },
    errorMessages () {
      if (this.customValidMessage) {
        let message = '';

        const field = this.customValidMessage;

        const translation = this.$t(`ui.forms.${field}`);

        const translationExists = translation !== `ui.forms.${field}`;

        // If translation is found in translation file use translated, otherwise use raw text.
        message = translationExists ? translation : field;

        return [message];
      }
      return this.errors.collect(this.field.label || this.uuid, this.scope);
    },
  },
  data () {
    return {
      customValidMessage: '',
    };
  },
  methods: {
    reset () {
      this.$validator.reset();
    },
  },
  watch: {
    errorMessages: {
      handler (newValue) {
        this.$emit('hasErrors', newValue);
      },

    },
    isValid: {
      handler (newValue) {
        this.$emit('isValid', newValue);
      },
      immediate: true,
    },
  },
};
