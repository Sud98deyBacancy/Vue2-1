<template>
  <section class="container">
    <!--<h2>{{ userName }} <span> {{age}}</span></h2>-->
        <h2>{{ user.name }} <span> {{user.age}}</span></h2>
        <button @click="setData"> Change </button> </section>
        <div class="container">
        <input type="text" placeholder="Enter First Name" v-model="Fname"/><br>
        <input type="text" placeholder="Enter Last Name" v-model="Lname"/>
        </div>
  
</template>

<script>
import { reactive,ref,computed } from 'vue';
export default {
 // data() {return {userName: 'Maximilian' };  },
setup(){
  // Passing value in ref const name=ref('Michael'); const age=ref(37);
  // Passing Object in ref const user= ref({name:'Mike',age:39});
  //  setTimeout(function(){  /*name.value = 'Gabriel',age.value=34*/ user.value.name='Luci',user.value.age=37 user.name='Luci',user.age=37},4000); 
  
  const Fname = ref(''); const Lname = ref('');
  const user= reactive({name:'Mike',age:39});

   function setNewData(){ user.name='Luce'; user.age+=10;}
  // function setFname(event){ Fname.value = event.target.value; }
  // function setLname(event){ Lname.value = event.target.value; }
   let uName=computed(function(){return Fname.value + ' ' + Lname.value });  
   user.name=uName;
return { user:user,setData:setNewData,Fname,Lname};
}
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body,input {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>