<template>
<router-view></router-view>
  <ul>
    <teams-item
      v-for="team in teams"
      :key="team.id"
      :id="team.id"
      :name="team.name"
      :member-count="team.members.length"
    >
    </teams-item>
    <button @click="confirmInput()">Confirm</button>
  </ul>
  <footer>
    <team-footer></team-footer>
  </footer>
</template>

<script>
import TeamsItem from './TeamsItem.vue';

export default {
  components: {
    TeamsItem,
  },
  methods:{
    confirmInput(){
      this.$router.push('/users');
    }
  },
  inject: ['teams'],
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 40rem;
  padding: 0;
}
</style>