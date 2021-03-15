<template>
  <base-container v-if="user">
    <h2>{{ user.fullName }}: Projects</h2>
    <base-search v-if="hasProjects" @search="updateSearch" :search-term="enteredSearchTerm"></base-search>
    <ul v-if="hasProjects">
      <project-item v-for="prj in availableProjects" :key="prj.id" :title="prj.title"></project-item>
    </ul>
    <h3 v-else>No projects found.</h3>
  </base-container>
  <base-container v-else>
    <h3>No user selected.</h3>
  </base-container>
</template>

<script>
import ProjectItem from './ProjectItem.vue';
import {computed,watch,toRefs } from 'vue';
import useSearch from '../../hooks/search.js';
export default {
  components: {ProjectItem},
  props: ['user'],
  setup(props){
    const { user } = toRefs(props);
    const projects = computed( function(){ 
      return user.value?user.value.projects:[]; });
  const {availableItems,enteredSearchTerm,updateSearch }= useSearch(projects,'title');
    
   const hasProjects = computed(function(){ 
    return props.user.projects && availableItems.value.length > 0;
   });
  watch(user,function(){enteredSearchTerm.value = '';});
    return{enteredSearchTerm,updateSearch,hasProjects,availableProjects:availableItems};
  },
  
  //data() {
  //  return {
  //    enteredSearchTerm: '',activeSearchTerm: '',
  //  };},
 /** computed: {
    hasProjects() {},
    availableProjects() {
      if (this.activeSearchTerm) {
        return this.user.projects.filter((prj) =>
          prj.title.includes(this.activeSearchTerm)
        );
      }
      return this.user.projects;
    },
  },
  methods: {
    updateSearch(val) {this.enteredSearchTerm = val;},
  },
  watch: {
    enteredSearchTerm(val) {
      setTimeout(() => {
        if (val === this.enteredSearchTerm) {
          this.activeSearchTerm = val;
        }
      }, 300);
    },
    user() {this.enteredSearchTerm = '';},
  },*/
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>