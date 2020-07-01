export default {
  computed: {
    isFormValid () {
      const keys = Object.keys(this.valid);
      return keys.findIndex((key) => !this.valid[key]) === -1;
    },
    errorsArray () {
      const keys = Object.keys(this.errorsList);
      let list = [];
      keys.forEach((key) => {
        list = list.concat(this.errorsList[key]);
      });
      return list;
    },
  },
  data () {
    return {
      errorsList: {},
      valid: {},
    };
  },
  methods: {
    hasErrors (model, value) {
      if (value.length) {
        this.$set(this.errorsList, model, value);
      } else {
        this.$delete(this.errorsList, model);
      }
    },
    isValid (model, value) {
      this.$set(this.valid, model, value);
    },
    validate (name) {
      return new Promise((resolve) => {
        this.$validator.validateAll(name ? `${name}.*` : undefined)
          .then((isValid) => {
            resolve(isValid);
          });
      });
    },
    reset () {
      const fields = this.$refs.field;
      if (Array.isArray(fields)) {
        fields.forEach(field => {
          field.reset();
        });
      } else {
        fields.reset();
      }
    },
  },
  watch: {
    isFormValid: {
      handler (newValue) {
        this.$set(this.localValue, 'valid', newValue);
        this.$emit('valid', newValue);
      },
      immediate: true,
    },
    errorsArray: {
      handler (newValue) {
        this.$emit('errorList', newValue);
      },
    },
  },
};
