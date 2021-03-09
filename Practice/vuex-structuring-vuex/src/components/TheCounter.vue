<template>
  <h3>{{ finalCounter }}</h3>
</template>

<script>
import { mapGetters } from 'vuex'; //Mapping the Getter

export default {
  computed: {
    // counter() {
    //   return this.$store.getters.finalCounter;
    // },
    ...mapGetters('numbers', ['finalCounter']) //Syntax to call getter
  },
};
</script>