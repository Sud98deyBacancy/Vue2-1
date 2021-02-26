<template>
    <ul>
        <li> <button @click="setOption('Low')"> Low </button> </li>
        <li> <button @click="setOption('Medium')"> Medium </button> </li>
        <li> <button @click="setOption('High')"> High </button> </li>
    </ul>
</template>
<script>
export default {
    data(){
        return{ optionValue:''}
    },
    methods:{
        setOption(option){ this.optionValue = option;}
    },
    provide(){
        return { option:this.optionValue };
    }
}
</script>
<style scoped>
ul{  list-style: none; margin: 0.5rem 0; padding: 0; display: flex; }
li{ margin: 0 1rem; border: 1px solid #ccc; align-items: center; justify-content: center;}
button{font: inherit; background-color: transparent; cursor: pointer;}
button:hover{background-color: tomato;}
</style>