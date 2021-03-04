<template>
<body>
 <base-dialog :show="!!error" title="An error occurred!" @close="handleError">
      <p>{{ error }}</p>
</base-dialog>

    <section>
        <base-card>
        <header> <h2> Requests recieved </h2></header>
        <ul v-if="hasRequests">
        <request-item v-for="req in recievedRequests" :key="req.id"
        :email="req.userEmail" :message="req.message">
        </request-item>
         </ul>
        <h3 v-else> You have recieved no requests</h3>
        </base-card>    
    </section>
</body>
</template>
<script>
import requestItem from './RequestItem.vue';
export default {
    components:{requestItem},
    data(){ return {error:null};},
    computed:{
        recievedRequests(){
           return this.$store.getters['request/requests'];
        },
        hasRequests(){ return this.$store.getters['request/hasRequests'];}
    },
    created(){
this.loadRequests();
    },
    methods:{
     loadRequests(){ 
       try{return this.$store.dispatch('request/fetchRequests');}
       catch(err){this.error = err.message || 'Something Failed'; }
      }
    },
    handleError(){ this.error = null; }
}
</script>
<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>