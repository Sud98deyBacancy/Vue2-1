const app = Vue.createApp({
  data() {
    return {
      counter: 0,name:'Alan'
    };
  },
  methods: { 
    add(num) { this.counter+=num; }, reduce(num) { this.counter-=num;},
    setName(event) { this.name = event.target.value; }
  }
});

app.mount('#events');
