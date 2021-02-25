<template>
  <button @click="inc">Add 2</button>
  <button @click="increase({value: 11})">Add 11</button>
</template>

<script>
import { mapActions } from 'vuex'; //mapping actions 

export default {
  methods: {
    // addOne() {
    //   this.$store.dispatch('increment');
    // }
    // ...mapActions(['increment', 'increase']) Syntax to call actions
    ...mapActions('numbers', {
      inc: 'increment',
      increase: 'increase'
    })
  }
}
</script>