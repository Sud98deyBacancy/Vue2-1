import { createStore } from 'vuex';
import productModule from './modules/product.js';
import cartModule from './modules/cart.js';
const store=createStore({ //root state module
modules:{prods:productModule,cart:cartModule},
state(){
    return{isLoggedIn: false };
},
mutations:{//Mutators for changing the state of Login
    login(state){ state.isLoggedIn=true;},
    logout(state){state.isLoggedIn=false;}
},
actions:{
    login(context){ context.commit('login')},//Login action
    logout(context){context.commit('logout')} //Logout action
},
getters:{ isAuth(state){return state.isLoggedIn;}}//Getting the state of logIn
     
});
export default store;