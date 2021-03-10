<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <h3 v-if="visible">COURSE GOAL : {{ Goal }}</h3>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="ToggleGoal">{{ text}} Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>
<script>
//import {ref} from 'vue';
//import {reactive} from 'vue';
export default {
/* Toggle goal using Composition
   setup(){
   //  const Goal=ref('Learn VueJS');//Seperate Ref
  //   const Display=ref({visible:true,text:'Toogle'}); // Ref Object
    const Goal={ title:'Learn VueJS',visible:true,text:'Toogle'}
     const Display = reactive(Goal);// Reactive Object
//  function Toggle1(){ Display.value.visible=!Display.value.visible;  }
   function Toggle2() { Display.visible = !Display.visible;}
return { Display,Toggle2};
   }  
  Toggle goal using Options API **/
data(){ 
  return { Goal:'Learn VueJS',visible:true,text:'Toggle' };
},
methods:{
  ToggleGoal(){ this.visible=!this.visible;}
}
}
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>