<template>
<!-- Animating the list items using transition group for multiple elements-->
    <transition-group tag="ul" name="city-list">
        <li v-for="city in Cities" :key="city">  {{ city }}</li>
    </transition-group>
    <div>
    <input type="text" v-model="cityname"/>
    <button @click="addCity()"> AddCity</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            cityname:'',Cities:['Baroda','Mumbai','Chennai','Delhi','Kolkata']
        };
    },
    methods:{
        addCity(){ this.Cities.unshift(this.cityname);},
        }
}
</script>
<style scoped>
ul{list-style:none; margin: 0;}
li{border: 1px solid #cccc; text-align: center;}
.user-list-enter-from {opacity:0; transform: translateX(-30px);}
.user-list-enter-to{opacity:1; transform: translateX(0);}
.user-list-enter-active{ transition: all 2s ease-out;}
.user-list-move{ transition: transform 0.9s ease;}
</style>