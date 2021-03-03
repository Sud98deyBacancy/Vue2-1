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
   registerCoach(state,payload){ state.coaches.push(payload);}
    },
    actions:{ //Implemeting the mutation
     registerCoach(context,data){
       const coachData={
         id:'c3',
         firstName:data.first,lastName:data.last,
         hourlyRate:data.rate,description:data.desc,
         areas:data.areas
       };
       context.commit('registerCoach',coachData);
     }
    },
    getters:{
    coaches(state) {return state.coaches;},
    hasCoaches(state) {return state.coaches && state.coaches.length > 0;}
    }
}