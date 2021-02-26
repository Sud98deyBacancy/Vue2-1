import { createApp } from 'vue';
import App  from  './App.vue';
import FriendContact from './components/ContactDetails.vue';
import AddFriend from './components/AddFriend.vue';
const appA=createApp(App);
appA.component('friend-contact',FriendContact);
appA.component('add-friend',AddFriend);
appA.mount('#app');
