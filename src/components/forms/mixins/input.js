export default {
  computed: {
    attributes () {
      return {
        ...this.additionalAttributes ? this.additionalAttributes : {},
        'data-vv-as': this.field.label || this.field.placeholder,
        'data-vv-name': this.field.label || this.uuid,
        validationErrors: this.errorMessages,
        label: this.field.label ? `${this.field.label}${this.field.required ? '*' : ''}` : null,
        buttonText: this.field.buttonText,
        action: this.field.action,
        type: this.type ? this.type : this.field.type,
        scope: this.scope,
        coupon: this.field.coupon,
        buttonDisabled: this.field.buttonDisabled,
        secondaryAction: this.field.secondaryAction,
        disabled: this.field.disabled,
        throttle: this.field.throttle,
        tooltip: this.field.tooltip,
        // maxlength: this.maxlength,
        field: {
          autocomplete: this.autocomplete,
          form: this.scope,
          prefix: this.field.prefix,
          appendIcon: this.appendIcon ? this.appendIcon : this.field.appendIcon,
          appendCb: this.appendCb ? this.appendCb : this.field.appendCb,
          prependIcon: this.field.prependIcon,
          placeholder: this.field.placeholder,
          prependCb: this.field.prependCb,
          readonly: this.field.readonly,
          required: this.field.required,
          suffix: this.field.suffix,
          minValue: this.min,
          maxValue: this.max,
          step: this.field.step,
        },
      };
    },
    min () {
      if (this.field.after) return this.field.after;
      if (this.field.minValue || this.field.minValue === 0) return this.field.minValue;
      return null;
    },
    max () {
      if (this.field.before) return this.field.before;
      if (this.field.maxValue) return this.field.maxValue;
      return null;
    },
    autocomplete () {
      if (typeof this.field.autocomplete === 'boolean') return this.field.autocomplete ? 'on' : 'off';
      return this.field.autocomplete;
    },
  },
  data () {
    return {
      customValidMessage: '',
    };
  },
};
