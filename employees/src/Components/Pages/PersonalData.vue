<template>
  
    <form>
      <center>
     <h2> Personal Data Form</h2>
      <div class="form-control">
        <input id="title" name="title" type="text" placeholder="Enter Full Name" />
      </div>
      <div class="form-control">
        <input id="Email" name="Email" type="Email" placeholder="Enter Email ID" />
      </div>
      <div class="form-control">
        <input id="Phone" name="Phone" 
        type="tel" placeholder="Enter Mobile/Phone Number" />
      </div>
      <div class="form-control">
        <label for="Address">Address</label>
        <textarea id="description" name="description" rows="3" ></textarea>
      </div>
      <div class="form-control">
        <b>Gender</b>
       <select>
         <option> Male</option>
         <option> Female</option>
       </select>
      </div>
      <div>
        <button>Submit</button>
      </div>
      </center>
    </form>
  
</template>

<script>
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
</style>