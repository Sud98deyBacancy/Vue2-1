<template>
<h3> Do More.....</h3>
  <h3>{{ counter }}</h3>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.getters.finalCounter;
    },
  },
};
</script>