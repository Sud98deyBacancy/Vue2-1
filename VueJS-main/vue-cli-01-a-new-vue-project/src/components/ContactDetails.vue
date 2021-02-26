<template>
    <li>
        <h2>{{ friendId}} </h2>
        <button @click="toggle"> {{ detailsAreVisible?'Hide':'Show'}} Details </button>
        <button @click="$emit('delete',friendId)"> Delete </button>
        <ul v-if="detailsAreVisible">
            <li><strong> {{ friendName }} </strong> </li>
            <li> <strong>{{ friendEmail}} </strong> </li>
        
        </ul>
    </li>
</template>
<script>
export default {
    //props:['friendId','friendName','friendEmail'],
    emits:['delete'],
    props : {
        friendId:{ type:String,required:true},
        friendName:{type:String,required:true},
        friendEmail:{type:String,required:true},
        
    },
    data(){
        return {detailsAreVisible: false};
    },
    methods:{
        toggle(){ this.detailsAreVisible=!this.detailsAreVisible; }
    }
};
</script>