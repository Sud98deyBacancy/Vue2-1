import { createApp } from 'vue';
import { createRouter,createWebHistory } from 'vue-router';
import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import TFooter from './components/teams/TeamFooter.vue';
const app = createApp(App)
// eslint-disable-next-line no-unused-vars
const router = createRouter({ // Defining routes
    history:createWebHistory(),
    routes:[{path:'/teams',components:{default:TeamsList,footer:TFooter},
            alias:'/',//child route
            children:[{path:':teamId',component: TeamMembers,
                       props:true,name:'team-members'}]
            },
     {path:'/users',component:UsersList},
     {path:'/:notFound(.*)',component: TeamsList}],//Default path
    linkActiveClass:'router' ,
    scrollBehavior(to,from,savedPosition){//Controls the scrolling 
      if(savedPosition){ return savedPosition;}
      return {left:0,top:0};
    }
});
app.use(router); // Loading route object to main app
app.mount('#app');
