const app = Vue.createApp({
  data() {
    return { enteredValue:'', goals: [] };
  },
  methods:{
  	addGoal:function() {this.goals.push(this.enteredValue);}
  },
  removeGoal(idx) { delete this.goals[idx]; }
});

app.mount('#user-goals');
