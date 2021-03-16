<template>
<div>
    <header><h1> Contact List </h1></header>
    <add-friend @add-contact="addContact"></add-friend>
    <ul>
      <friend-contact
      v-for="friend in friends" :key="friend.id"
      :friend-id=friend.id 
      :friend-name=friend.name 
      :friend-email=friend.email
      @delete="deleteContact">
      </friend-contact>     
      
    </ul>
</div>
</template>
<script>
import AddFriend from './components/AddFriend.vue';
    export default {
  components: { AddFriend },
 data(){
     return {
         friends:[{id:'manuel',name:'manuel Lorenz',email:'manuel@localhost.com'},
                  {id:'Lucky',name:'Lucky Ali',email:'Lucky@localhost.com'},
                  {id:'Mucky',name:'Mucky Ali',email:'Mucky@localhost.com'}]
     };
 },
 methods:{
   addContact(name,email){
     const newFriend={ 
       id:new Date().toISOString(),name:name,email:email
     };
     this.friends.push(newFriend);
   },
   deleteContact(id){
     this.friends = this.friends.filter(friend => friend.id !== id);
   }
 }
    };
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');
* {
  box-sizing: border-box;
}

html {
  font-family: 'Jost', sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul,input,label {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li,form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

</style>