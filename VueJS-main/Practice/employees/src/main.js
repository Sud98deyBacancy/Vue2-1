import { createApp } from 'vue';
import app from './App.vue';
import BaseBtn from './Components/UI/BaseButton.vue';
import BaseCard from './Components/UI/BaseCard.vue';

const Mainapp=createApp(app);
Mainapp.component(BaseBtn);
Mainapp.component(BaseCard);
Mainapp.mount('#app');
