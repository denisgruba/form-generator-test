/**
 * @mixin
 */
export default {
  props:    {
    /**
     * Component's reactive model
     */
    value: {
      type:    [String, Number, Boolean, Object, Array],
      default: null,
    },
  },
  computed: {
    localValue: {
      get () {
        return this.value;
      },
      /**
       * Emit `@input` event, passes through the new Value of the object
       * @param {Any} newValue an updated value of localValue
       * @type Any
       * @event click
       */
      set (newValue) {
        this.$emit('input', newValue);
      },
    },
  },
};
