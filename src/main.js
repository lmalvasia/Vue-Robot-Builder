import Vue from 'vue';
import App from './App.vue';
import Router from './router';

Vue.config.productionTip = false;

// Creamos una instancia de Vuew y pasamos las opciones para configurar la aplicacion VUE.
// La opcion de render, renderiza el componente App.

new Vue({
  render: h => h(App),
  router: Router,
}).$mount('#app');
