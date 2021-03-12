<template>
  
    
   <form @submit.prevent="addContact">      
     <h2> Personal Data Form</h2>
      <div class="form-control" :class="{invalid : namevalid === 'invalid' }">
        <input id="Fname"
               name="Fname" 
               type="text" 
               placeholder="Enter Full Name" 
               v-model.trim="name" @blur="validateName"/>
      </div>
      <p v-if="namevalid === 'invalid'"> Enter a valid name </p>
      <div class="form-control">
        <input id="Email" name="Email" 
        type="Email" placeholder="Enter Email ID" v-model="email" />
      </div>

      <div class="form-control">
        <input id="Phone" name="Phone" 
        type="tel" placeholder="Enter Mobile/Phone Number" v-model="phone"/>
      </div>
      <div class="form-control" :class="{invalid : addressvalid === 'invalid' }">
        <label for="Address">Address</label>
        <textarea id="Address" name="Address" rows="3" 
            v-model.trim="address" @blur="validateAddress"></textarea>
      </div>
      <p v-if="addressvalid === 'invalid'"> Enter a valid address </p>
      <div class="form-control">
        <b>Gender</b>
       <select id="Gender" name="Gender" v-model="gender">
         <option> Male</option>
         <option> Female</option>
       </select>
      </div>
      <div>
        <button @click="next">Submit</button>
      </div>
   </form>
    
  
</template>
<script>
export default {
  inject:['Contact'],
  data(){
    return{ id:null,name:'',email:'',phone:'',address:'',gender:'',
    namevalid:'',addressvalid:''}
  },
  methods:{
    addContact(){
    this.id=new Date().toISOString();
    this.Contact(this.id,this.name,this.email,this.phone,this.address,this.gender);
    },
    validateName(){
      if(this.name === '' ){ this.namevalid = 'invalid';}
      else{this.namevalid = 'valid'; }
    },
    validateAddress(){
      if(this.address === ''){ this.addressvalid = 'invalid';}
      else{this.addressvalid = 'valid';}
    }
}
}
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 60%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
.form-control.invalid input textarea p {border-color:red ;}
</style>