<template>
  <form @submit.prevent="AddEmployee">  
    <h2> Professional DataForm </h2>
      <div class="form-control">
        <label for="designation">Designation</label>
        <input id="desg" name="desg" type="text" v-model="desg" />
      </div>
      <div class="form-control">
        <label for="Job description">Job description </label>
        <textarea id="description" name="description" rows="3" v-model="desc" ></textarea>
      </div>
      <div class="form-control">
        <label for="Salary">Salary</label>
        <input id="Salary" name="salary" type="number" v-model="sal"/>
      </div>
      <div class="form-control">
        <b>Department</b><br>
       <select name="Department" id="Department" v-model="dept">
         <option> IT </option> 
         <option> Finance </option> <option> HR </option>
         <option> Marketing </option> <option> Service </option>
       </select>
      </div>
      <div>
        <button>Submit</button>
      </div>
  </form>
</template>
<script>
export default {
inject:['Professional'],
data(){
  return{desg:'',desc:'',dept:'',sal:''};
},
methods:{
  AddEmployee(){
    this.Professional(this.desg,this.desc,this.dept,this.sal);
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

input,select,
textarea {
  display: inline-block;
  width: 70%;
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
</style>