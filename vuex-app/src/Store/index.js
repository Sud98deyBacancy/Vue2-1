import { createStore } from 'vuex';
const store = createStore({
    state() {
      return {
        counter: 0,isLoggedIn:false
      };
    },//Mutation Object
    mutations:{
      increment(state){ state.counter += 2;},
      increase(state,payload){ state.counter += payload.value;},
      setAuth(state, payload) {state.isLoggedIn = payload.isAuth;}//mutation using arguements
    },
    actions:{
      increment(context){
        context.commit('increment');
      },
      increase(context,payload)
      {
        setTimeout(function(){
         context.commit('increase',payload); 
        },3000);
      },
      login(context){context.commit('setAuth',{isAuth:true})},
      logout(context){context.commit('setAuth',{isAuth:false})}
    },
    getters:{//Getter Object
        finalCounter(state){
         let fcounter = state.counter*3;
         if(fcounter>200){ return 200; }
         return fcounter;
        },
        userIsAuthenticated(state) {return state.isLoggedIn;}
    }
  });
  export default store;
  