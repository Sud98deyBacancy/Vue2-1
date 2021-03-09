<template>
    <button @click="logIn" v-if="!isAuth"> LogIn</button>
    <button @click="logOut" v-if="isAuth"> LogOut</button>
<p>{{ isTestAuth }}</p>
</template>
<script>
export default {
   methods:{
       logIn(){this.$store.dispatch('login')},
       logOut(){this.$store.dispatch('logout')}
   },
   computed:{
       isAuth(){return this.$store.getters.userIsAuthenticated},
       isTestAuth(){return this.$store.getters.testAuth }
   } 
}
</script>