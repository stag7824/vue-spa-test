import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store'; // Import Vuex store
import ElementPlus from 'element-plus'; // Import Element Plus UI library
import 'element-plus/dist/index.css'; // Import Element Plus CSS

// Create the Vue application instance
const app = createApp(App);

// Use the router, store, and Element Plus in the Vue application
app.use(router);
app.use(store);
app.use(ElementPlus);

app.mount('#app'); // Mount the app to the DOM
