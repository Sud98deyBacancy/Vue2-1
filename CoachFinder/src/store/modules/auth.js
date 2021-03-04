const auth ={
    state(){   return { userId:null,token:null,tokenExp:null }; },
   mutations:{
       setUser(state,payload){
           state.token=payload.token; 
           state.userId = payload.userId;
           state.tokenExp = payload.tokenExp;
        }
   },
   actions:{
  async login(context,payload){
        const response=await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCpSEwHCXqk7AhuCGXmDrojyWRrpLLHptk',{
            method:'POST', body:JSON.stringify({email:payload.email,password:payload.password,returnSecureToken:true})
            });
            const ResponseData=response.json();
            console.log(ResponseData);
            if(!response.ok)
        { console.log(ResponseData.message ||'Authentication Failed');} 
        context.commit('setUser',{ token:ResponseData.idToken,
        userId:ResponseData.localId,tokenExp:ResponseData.expiresIn }); 
    },
async  signup(context,payload){
 
 const response=await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyCpSEwHCXqk7AhuCGXmDrojyWRrpLLHptk',{
       method:'POST', body:JSON.stringify({email:payload.email,password:payload.password,returnSecureToken:true})
       });
        const ResponseData=response.json();
        if(!response.ok)
    { console.log(ResponseData.message ||'Authentication Failed');} 
        context.commit('setUser',{ token:ResponseData.idToken,
    userId:ResponseData.localId,tokenExp:ResponseData.expiresIn }); 
    }
   },
   getters:{
       userId(state){ return state.userId; },
       getToken(state){ return state.token;},
       isAuthenticated(state){ return !!state.token; }
   }
};
export default auth;