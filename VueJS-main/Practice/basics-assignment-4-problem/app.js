const app=Vue.createApp({
	data(){
		return{ inputClass:'',IsVisible:true,inputBgColor:''};
	},
   methods:{
   	toggleVisibility(){
   		this.IsVisible = !this.IsVisible;
   	}
   },
   computed:{
   	paraClass(){
   		return{
   			user1: this.inputClass === 'user1',
   			user2: this.inputClass === 'user2',
   			visible:this.IsVisible,
   			hidden: !this.IsVisible
   		};
   	}
   }
});
app.mount('#assignment');