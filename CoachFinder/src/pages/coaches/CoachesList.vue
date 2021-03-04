<template>
<body>
  <base-dialog :show="!!error" title="An error occurred!" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
<coach-filter @change-filter="setFilters">
  <!-- Listing to the change-filter event -->
  </coach-filter>    
    <base-card>
        <div class="controls">
        <base-button mode="outline" @click="loadCoaches"> Refresh </base-button> 
        <base-button link to="/register" mode="outline" v-if="isLoggedIn"> Register As Coach</base-button>
        <base-button link to="/auth" v-if="!isLoggedIn"> LogIn</base-button>  
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
  </body>
</template>
<script>
import CoachItem from './CoachItem.vue';
import CoachFilter from './CoachFilter.vue';
export default {
    components:{CoachItem,CoachFilter},
    data(){
      return { activefilters:{ frontend:true,backend:true,career:true},error:null};
    },
    computed:{
         isLoggedIn(){ return this.$store.getters.isAuthenticated; },
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
    created(){ this.loadCoaches(); },
    methods:{
      setFilters(updatedFilters){//Listening to change-filter event 
        this.activefilters = updatedFilters; },
      loadCoaches(){
        try {this.$store.dispatch('coaches/loadCoach');}
        catch(err){this.error = err.message || 'Something went wrong!!';}
        },
        handleError(){ this.error =null;}
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