import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAJzU9RkpS7nUFQAM-T6_Y-HL_qZ0QLbBM",
    authDomain: "vue-todo-3c7e4.firebaseapp.com",
    projectId: "vue-todo-3c7e4",
    storageBucket: "vue-todo-3c7e4.appspot.com",
    messagingSenderId: "189618802022",
    appId: "1:189618802022:web:9ddc26cb501dd296240ca7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
