<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadData">Load Submitted Experiences</base-button>
      </div>
      <p v-if="error"> {{ error }}</p>
      <p v-else-if="results.length === 0"> No Experiences Found. Please Add Some Experiences </p>
      
      <ul v-else>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  
  components: {
    SurveyResult,
  },
  data(){
    return { results:[],error:null };
  },
  methods:{
    loadData(){
    this.error=null;  
    let url = 'https://vuefirebase-9abe3-default-rtdb.europe-west1.firebasedatabase.app/surveys.json';   
    fetch(url).then((response)=>{
      if(response.ok){ return response.json(); }
    }).then((data)=>{
      const result=[];
      for(const id in data)
      {
        result.push({id:id,name:data[id].name,rating:data[id].rating});
      }
      this.results = result;
    }).catch((error)=>{
      console.log(error);
       this.error='Failed to fetch data. Please try after some time';
    });   
    }
  },
  mounted() {this.loadData(); }// Displaying data when server is loaded or reloaded
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
p{ color: coral;}
</style>