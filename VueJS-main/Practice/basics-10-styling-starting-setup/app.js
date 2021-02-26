const app=Vue.createApp({
	data() {
		return { boxASelect:false,boxBSelect:false,boxCSelect:false};
	},
	methods:{
		boxSelected(box){
			if(box === 'A') { boxASelect=true; }
			else if(box === 'B') {boxBSelect=true;}
			else if(box === 'C') {boxCSelect=true;}
		}
	}
});
app.mount('#styling');