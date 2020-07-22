export const logComponentName = {
  computed: {
    componentName() {
      return this.$options.name;
    }
  },
  created() {
    console.log(`${this.componentName} component created`);
  }
};
