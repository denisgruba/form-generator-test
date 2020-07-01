export default {
  data () {
    return {
      availableFieldTypes: [],
    };
  },
  created () {
    const regex = RegExp('./(.+?).vue', '');
    const ctx = require.context('@/components/forms/fields/', false, /\.vue$/);
    ctx.keys().forEach((key) => {
      const match = regex.exec(key);
      this.availableFieldTypes.push(match[1]);
    });
  },
};
