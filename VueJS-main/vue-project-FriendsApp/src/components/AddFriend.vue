<template>
   <section>
    <form @submit.prevent="submitData">
        
        <div class="form-control">
            <input type="text" placeholder="Enter Full Name"
             v-model="enteredName"/>
        </div> 
        <div class="form-control">
            <input type="email"  placeholder="Enter your Email Id" v-model="enteredEmail"/>
        </div>
       <div class="form-control">
            <textarea name="Desc" rows="3" cols="5" v-model="enteredDesc"> Enter Description of Friend</textarea>
        </div>
        <div class="form-control">
            <input type="tel" placeholder="Enter Phone No:" 
            style="width:60%;" v-model="enteredPhone"/>
        </div>
       <div class="form-control">
        <base-button mode="flat"> Add Contact </base-button> 
        <base-button>Reset</base-button>
        </div>
    </form></section>
        
    </template>
<script>
export default {
    emits:['add-contact'],
    data() { return {enteredName:'',enteredEmail:'',enteredDesc:'Something',enteredPhone:1111}; },
    methods:{
        submitData(){ this.$emit('add-contact',this.enteredName,this.enteredEmail,this.enteredDesc,this.enteredPhone); }
    }
}
</script>
<style scoped>
input,textarea {
  display: block;
  width: 90%;
  font: inherit; font-weight: bold;
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

</style>