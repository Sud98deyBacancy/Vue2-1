const app = Vue.createApp({
	data : function(){
		return { userInput: '',confirmedInput: ''};
    },
	methods : { 
		show() { alert("Welcome to VueJs");},
		saveInput(event) { this.userInput = event.target.value; }, 
        confirmInput() {this.confirmedInput = this.userInput; } 
	}
});
app.mount('#assignment');