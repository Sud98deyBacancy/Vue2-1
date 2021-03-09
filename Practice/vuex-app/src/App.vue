<template>
  <base-container title="Vuex" v-if="isAuth">
    <the-counter></the-counter>
    <fav-counter></fav-counter>
    <button @click="addOne">Add </button>
    <add-counter></add-counter>
  </base-container>
  <base-container title="Auth">
  <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import AddCounter from './components/AddCounter.vue';
import FavCounter from './components/FavCounter.vue';
import UserAuth from './components/UserAuth.vue';
export default {
  components: {
    BaseContainer,TheCounter,AddCounter,FavCounter,UserAuth
  },
  methods: {
    addOne() {
      this.$store.dispatch('increment');//Calling a mutation function
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>