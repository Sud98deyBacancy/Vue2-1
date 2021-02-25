<template>
<header> <h1> Employee App </h1> </header>
<div class="card">
    <button @click="setComponent('personal-data')">Store contactInfo</button> 
    <button class="flat" @click="setComponent('professional-data')">Store ProfessionalInfo</button>
    <button @click="setComponent('show-data')">Show Info </button>
  </div>
  <section class="card">
    <keep-alive>
    <component :is="PageLoad"></component>
    </keep-alive>
  </section>
</template>
<script>
import PersonalData from './Components/Pages/PersonalData.vue'
import ProfessionalData from './Components/Pages/ProfessionalData.vue'
import ShowData from './Components/Pages/ShowData.vue';
export default{
  components:{PersonalData,ProfessionalData,ShowData},
  data(){
    return { PageLoad:''};
  },
  methods:{
    setComponent(value){this.PageLoad=value;}
  }
}
</script>
<style>

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}
.card {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 40rem;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
header {
  width: 100%;
  height: 5rem;
  background-color: #645032;
  display: flex;
  justify-content: center;
  align-items: center;
}

header h1 {
  color: white;
  margin: 0;
}
button {
  padding: 0.75rem 1.5rem;
  font-family: inherit;
  background-color: #3a0061;
  border: 1px solid #3a0061;
  color: white;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #270041;
  border-color: #270041;
}

.flat {
  background-color: transparent;
  color: #3a0061;
  border: none;
}

.flat:hover,
.flat:active {
  background-color: #edd2ff;
}

</style>