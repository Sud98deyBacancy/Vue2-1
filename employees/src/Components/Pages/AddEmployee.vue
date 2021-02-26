<template>
<li>__________________________________________________________________________________
    <section>
    <h3> Personal Details </h3>
    <b>Name: {{ name }}</b><br>
    <b> Email: {{ email }}</b><br> <p>Phone: {{ phone }}</p> 
    <address>Address: {{address}}</address>
    <p> Gender :{{gender }} </p>
    </section>
    <section>
        <h3> Professional Details </h3>
          <p> Designation: {{ desg }}</p> <p>Description: {{desc}}</p> 
          <p> Net Salary: {{ sal }}</p> <p>Department: {{dept}}</p>
     </section>    
</li>    
</template>
<script>
export default {
    
    props:['id','name','email','phone','address','gender','desg','desc','sal','dept']
}
</script>
<style scoped>
li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}
</style>