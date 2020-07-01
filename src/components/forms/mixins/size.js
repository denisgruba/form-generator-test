export default {
  methods: {
    size (size = []) {
      let sizes = {};
      if (size[0]) {
        sizes[`sm${size[0]}`] = true;
      }
      if (size[1]) {
        sizes[`md${size[1]}`] = true;
      }
      if (size[2]) {
        sizes[`lg${size[2]}`] = true;
      }
      if (size[3]) {
        sizes[`lg${size[3]}`] = true;
      }
      return sizes;
    },
  },
};
