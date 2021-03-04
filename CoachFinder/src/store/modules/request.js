export default{
    namespaced:true,
    state(){
        return{ requests:[] };
    },
    mutations:{
    addRequest(state,payload){ state.requests.push(payload);},
    setRequests(state,payload){
      state.requests=payload;
    }
    },
    actions:{
 async contactCoach(context,payload){
    const newRequest={
       userEmail:payload.email,message:payload.message
    };
   const response = await fetch(`https://vuefirebase-9abe3-default-rtdb.europe-west1.firebasedatabase.app/requests/${payload.coachId}.json`,{
      method:'POST',body:JSON.stringify(newRequest)//Insertion of Data
    });
    var responseData = await response.json();
    if(!response.ok){ 
      const error = new Error(responseData.message || 'Failed to load Data');
    throw error;}
    newRequest.id = responseData.name;
    newRequest.coachId = responseData.coachId;
    context.commit('addRequest',newRequest);
  },
 async fetchRequests(context){
   const coachId = context.rootGetters.userId;
   const token = context.rootGetters.getToken;
   //Data retreiving from fireBase
  const response= await fetch(`https://vuefirebase-9abe3-default-rtdb.europe-west1.firebasedatabase.app/requests/${coachId}.json?auth=`+ token);
  const responseData = await response.json();
  if(!response.ok){ 
    const error = new Error(responseData.message || 'Failed to load Data');
  throw error;}
  const requests=[];
  for(const key in responseData){
    const request = {id:key,
      coachId:coachId,
      userEmail:responseData[key].userEmail,
      message:responseData[key].message};
    requests.push(request);
    }
  context.commit('setRequests',requests);
  }
    },
    getters:{
    requests(state,_,_2,rootGetters)
    { const coachId = rootGetters.userId;
      return state.requests.filter(req => req.coachId === coachId);},
    hasRequests(_,getters){ return getters.requests && getters.requests.length > 0;}
    }
};