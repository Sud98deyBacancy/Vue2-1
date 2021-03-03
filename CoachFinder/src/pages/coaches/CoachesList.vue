<template>
<coach-filter @change-filter="setFilters">
  <!-- Listing to the change-filter event -->
  </coach-filter>    
    <base-card>
        <div class="controls">
        <base-button mode="outline"> Refresh </base-button> 
        <base-button link to="/register" mode="outline"> Register As Coach</base-button>
        </div> 
        List Of Coaches
        <ul v-if="hasCoaches">
      <coach-item v-for="coach in filteredCoaches" 
      :key="coach.id" :id="coach.id" :firstName="coach.firstName" 
      :lastName="coach.lastName" :rate="coach.hourlyRate" :areas="coach.areas">
     </coach-item>
    </ul>
    <h3 v-else>No coaches found.</h3>
  
    </base-card>
</template>
<script>
import CoachItem from './CoachItem.vue';
import CoachFilter from './CoachFilter.vue';
export default {
    components:{CoachItem,CoachFilter},
    data(){
      return { activefilters:{ frontend:true,backend:true,career:true}};
    },
    computed:{
        filteredCoaches(){ //Loading data on basis of filters set by user
          const coaches=this.$store.getters['coaches/coaches'];
          return coaches.filter(coach => {
            if(this.activefilters.frontend && coach.areas.includes('frontend'))
            { return true; }
            if(this.activefilters.backend && coach.areas.includes('backend'))
            { return true; }
            if(this.activefilters.career && coach.areas.includes('career'))
            { return true; }
            return false;
          });
          },
        hasCoaches() {return this.$store.getters['coaches/hasCoaches'];}
    },
    methods:{
      setFilters(updatedFilters){//Listening to change-filter event 
        this.activefilters = updatedFilters; }
    }
}
</script>
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>