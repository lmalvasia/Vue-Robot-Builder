import Vue from 'vue';
import App from './App.vue';
import Router from './router';
import Store from './store';
import pinDirective from './shared/pin-directive';

Vue.config.productionTip = false;
Vue.directive('pin', pinDirective);
// Creamos una instancia de Vuew y pasamos las opciones para configurar la aplicacion VUE.
// La opcion de render, renderiza el componente App.

new Vue({
  render: h => h(App),
  router: Router,
  store: Store,
}).$mount('#app');
