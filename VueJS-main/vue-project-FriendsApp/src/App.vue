<template>
  <display-contact></display-contact>
</template>
<script>
import displayContact from './components/DisplayContact.vue';
export default {
  components:{displayContact}
}
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
  background-color: blanchedalmond;
  color: black;
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

</style>