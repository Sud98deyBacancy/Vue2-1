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
      :friend-desc=friend.desc
      :Phone=friend.phone
      @delete="deleteContact">
      </friend-contact>     
      
</ul>
</div>
</template>
<script>
    export default {

 data(){
     return {
         friends:[{id:'manuel',name:'manuel Lorenz',email:'manuel@localhost.com',desc:'AAA BBB',phone:2211334421},
                  {id:'Lucky',name:'Lucky Ali',email:'Lucky@localhost.com',desc:'AAA BVB',phone:2511334421},
                  {id:'Mucky',name:'Mucky Ali',email:'Mucky@localhost.com',desc:'AAA BCB',phone:2611634421}]
     };
 },
 methods:{
   addContact(name,email,desc,phone){
     const newFriend={ 
       id:new Date().toISOString(),name:name,email:email,desc:desc,phone:phone
     };
     this.friends.push(newFriend);
   },
   deleteContact(id){
     this.friends = this.friends.filter(friend => friend.id !== id);
   }
 }
    };
</script>
