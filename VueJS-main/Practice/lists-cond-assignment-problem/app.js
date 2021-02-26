const app=Vue.createApp({
	data(){
		return{ enteredTeaks:'',ToDoList:[],isVisible:true};
	},
	computed: {
       buttonCaption(){
       	return this.isVisible?'Hide Tasks':'Show Tasks';
       }
	},
	methods:{
       addTask(){ this.ToDoList.push(this.enteredTeaks);},
       Hide(){ this.isVisible = !this.isVisible; }
	}
});
app.mount("#assignment");