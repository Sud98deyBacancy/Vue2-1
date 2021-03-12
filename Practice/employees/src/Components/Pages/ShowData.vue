<template>
<h2> Show Employee Information </h2>

<ul>
    <add-employee v-for="emp in employees"
    :key="emp.id" :id="emp.id" :name="emp.name"
    :email="emp.email" :phone="emp.phone" :gender="emp.gender"
    :address="emp.address" :desg="emp.desg" :desc="emp.desc" 
    :dept="emp.dept" :sal="emp.sal" 
    >
    
    </add-employee>
    
</ul>
</template>
<script>
import AddEmployee from './AddEmployee.vue';
export default {
    inject:['employees'],
    components:{AddEmployee},
    
}
</script>
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>