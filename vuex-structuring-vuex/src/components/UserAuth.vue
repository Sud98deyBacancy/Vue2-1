<template>
  <button @click="login" v-if="!isAuth">Login</button>
  <button @click="logout" v-if="isAuth">Logout</button>
  <p>{{ isTestAuth }}</p>
</template>

<script>
export default {
  methods: {//LogIN Method
    login() {
      this.$store.dispatch('login');//dispatching actions
    }, //LogOut Method
    logout() {
      this.$store.dispatch('logout');
    }
  },
  computed: {
    isAuth() {  //Getting the state of user authentication
      return this.$store.getters.userIsAuthenticated;
    },
    isTestAuth() {
      return this.$store.getters.testAuth;
    }
  }
}
</script>