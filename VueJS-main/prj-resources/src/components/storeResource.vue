<template>
  
    <ul>
    <resource v-for="res in resources" 
    :key="res.id"
    :title="res.title"
    :description="res.description"
    :link="res.link"> 
    </resource>
  </ul>
</template>
<script>
import Resource from './Resource.vue';

    export default{
        //props:['resources'],
        inject:['resources'],
        components:[Resource]
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