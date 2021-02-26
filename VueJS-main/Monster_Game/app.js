function randomize(min,max) {
	var x = Math.floor(Math.random() * (max-min)) + min;
	return x;
}
const MonsterGameApp=Vue.createApp({
	data() { 
		return { MonsterHealth:100,PlayerHealth:100,round:0,winner:null,logMessages:[] }; 
	},
	computed:{
		MonsterBar(){
		  if (this.MonsterHealth < 0) { return { width : '0%'}; } 
			return { width: this.MonsterHealth + '%'}; 
		},
	    PlayerBar(){ 
           if (this.PlayerHealth < 0) { return { width: '0%'}; }
	    	return { width: this.PlayerHealth + '%'}; },
	    mayUseSpecialAttack(){ return this.round%3 !== 0; }
	},
	watch:{
		MonsterHealth(value){
			if (value <=0 && this.PlayerHealth <= 0) { /* a draw*/ this.winner = 'draw';}
			else if (value <= 0) { /* Monster Lost*/ this.winner = 'Player'; }
		},
		PlayerHealth(value){
			if (value <=0 && this.MonsterHealth <= 0) { /* a draw*/ this.winner = 'draw';}
			else if (value <= 0) { /* Player Lost*/ this.winner = 'Monster'; }
		}
	},
   methods:{
   	   StartGame(){
         this.MonsterHealth = 100; this.PlayerHealth = 100; this.round = 0; 
         this.winner = null; this.logMessages = [];
   	   },
       attackMonster(){
       	this.round++;
       	const attackValue = randomize(10,5);
       	this.MonsterHealth -= attackValue;
       	this.addLogMessage('Player','attack',attackValue);
       	this.attackPlayer();
       },
       attackPlayer(){ const attackValue = randomize(12,7); this.PlayerHealth -= attackValue; 
         this.addLogMessage('Monster','attack',attackValue);
       },
       specialAttackMonster(){
       	this.round++;
       	const attackValue = randomize(20,10);
       	this.MonsterHealth -= attackValue;
       	this.addLogMessage('Player','special-attack',attackValue);
       	this.attackPlayer();
       },
       healPlayer(){
       	this.round++;
       	const healValue = randomize(16,7);
       	if((this.PlayerHealth + healValue)>100){ this.PlayerHealth = 100; }
       	else { this.PlayerHealth += healValue;}
       	this.addLogMessage('Player','heal',healValue);
        this.attackPlayer(); 
       },
       surrender() {  this.winner = 'Monster'; },
       addLogMessage(who,what,value){
           this.logMessages.push({actionBy:who,actionType:what,actionValue:value });
        } 
     }       
 });
MonsterGameApp.mount('#game')