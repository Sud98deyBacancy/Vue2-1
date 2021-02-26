const app=Vue.createApp({
	data() {
		return { message1:'Learn VueJS',message2:'Master VueJS',title: 'My Goal Today',Link:'https://vuejs.org/'};
	},
	methods : { 
	outputRes() { 
		number = Math.random(); 
		if(number<0.5){ return this.message1; } 
		else { return this.message2; } 
                 }  
	}
});
app.mount('#user-goal')