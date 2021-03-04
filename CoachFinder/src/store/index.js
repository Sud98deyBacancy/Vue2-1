import { createStore } from 'vuex';
import coachesModule from './modules/coaches.js';
import request from './modules/request.js';
import auth from './modules/auth.js';
const store=createStore({
    modules:{coaches:coachesModule,request,auth},
      // state(){  return { userId: 'c3' }; }, 
      //getters:{  userId(state){ return state.userId; }}
});
export default store;