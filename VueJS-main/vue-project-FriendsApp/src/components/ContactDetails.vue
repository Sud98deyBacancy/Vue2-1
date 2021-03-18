<template>
    <li>
        <h2>{{ friendId}} </h2>
        <base-button @click="toggle"> {{BtnCaption }} Details </base-button>
        <base-button mode="flat" @click="$emit('delete',friendId)"> Delete </base-button>
        <ul v-if="detailsAreVisible">
            <li><strong> {{ friendName }} </strong> </li>
            <li> <strong>{{ friendEmail}} </strong> </li>
           <li> <strong>{{ friendDesc}} </strong> </li>
           <li> <strong>{{ Phone}} </strong> </li>
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
        friendDesc:{type:String,required:false},
        Phone:{type:Number,required:false}
    },
    data(){
        return {detailsAreVisible: false};
    },
    methods:{
        toggle(){ this.detailsAreVisible=!this.detailsAreVisible; }
    },
    computed:{
        BtnCaption(){ return this.detailsAreVisible?'Hide':'Show'; }
    }
};
</script>