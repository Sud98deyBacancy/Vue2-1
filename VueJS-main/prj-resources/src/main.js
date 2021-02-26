import { createApp } from 'vue';
import app from './App.vue';
import BaseCard from './components/BaseCard.vue';
import BaseButton from './components/baseButton.vue';
const Mainapp=createApp(app);
Mainapp.component('base-card',BaseCard);
Mainapp.component('base-button',BaseButton);
Mainapp.mount('#app');
