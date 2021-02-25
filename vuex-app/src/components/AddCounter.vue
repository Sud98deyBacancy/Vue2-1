<template>
    <button @click="addOne">Add 5 </button>
</template>
<script>
export default {
   methods: {
    addOne() {//calling mutation function with arguement for increment
      this.$store.dispatch({type:'increase',value:5});
    }
  },
}
</script>