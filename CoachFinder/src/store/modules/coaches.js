export default{
    namespaced:true,
    state(){
        return{ coaches: [
        {
          id: 'c1',
          firstName: 'Maximilian',
          lastName: 'Schwarzmüller',
          areas: ['frontend', 'backend', 'career'],
          description:
            "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
          hourlyRate: 30
        },
        {
          id: 'c2',
          firstName: 'Juliana',
          lastName: 'Moore',
          areas: ['frontend', 'career'],
          description:
            'I am Juliana and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
          hourlyRate: 35
        }
      ]};
    },
    mutations:{//Adding coach data in the state
   registerCoach(state,payload){ state.coaches.push(payload);},
   loadCoach(state,payload){ state.coaches = payload; }
    },
    actions:{ //Implemeting the mutation
     
      async registerCoach(context,data){
        const coachId = context.rootGetters.userId;
        const coachData={
         firstName:data.first,lastName:data.last,
         hourlyRate:data.rate,description:data.desc,
         areas:data.areas
       };
       
     const response=await fetch(`https://vuefirebase-9abe3-default-rtdb.europe-west1.firebasedatabase.app/coaches/${coachId}.json`,{
        method:'PUT',body:JSON.stringify(coachData)
       });
     //  const responseData = await response.json();
       if(!response.ok){ //error...
      }
       context.commit('registerCoach',{
         ...coachData,id:coachId
       });
     },
    async loadCoach(context){
      //const userId = context.rootGetters.userId;
      const response= await fetch(`https://vuefirebase-9abe3-default-rtdb.europe-west1.firebasedatabase.app/coaches.json`);
      const responseData = await response.json();
      if(!response.ok){ /** error.... */
       let error = new Error(responseData.message || 'Failed to Fetch Data');
       throw error;
      } 
      const coaches=[];
      for(const key in responseData){
        const coach={
          id:key,firstName:responseData[key].firstName,
          lastName:responseData[key].lastName,
          hourlyRate:responseData[key].hourlyRate,
          description:responseData[key].description,
          areas:responseData[key].areas,
        };  coaches.push(coach);       
      }      
      context.commit('loadCoach',coaches); 
    }
    },
    getters:{
    coaches(state) {return state.coaches;},
    hasCoaches(state) {return state.coaches && state.coaches.length > 0;}
    }
}