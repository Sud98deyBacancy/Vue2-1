<template>
   <section>
    <form @submit.prevent="submitData">
        
        <div>
            <label> Name </label><input type="text" v-model="enteredName"/>
        </div> 
        <div>
            <label> Email </label><input type="email" v-model="enteredEmail"/>
        </div>
       <div>
        <button> Add Contact </button> <button type="reset">Reset</button>
        </div>
    </form></section>
        
    </template>
<script>
export default {
    emits:['add-contact'],
    data() { return {enteredName:'',enteredEmail:''}; },
    methods:{
        submitData(){ this.$emit('add-contact',this.enteredName,this.enteredEmail); }
    }
}
</script>