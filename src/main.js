import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueSocketIO from 'vue-socket.io'
// import io from 'socket.io-client';
// const socket = io('https://api.doudo.kr',{
//   transports: ['websocket'],
// });

// socket.on('reconnect_attempt', () => {
//   console.log('reconnecting')
// });

// socket.on("connect", () => {
//   console.log('connected');
// });

// socket.on("disconnect", (reason) => {
//   console.log('disconnected : ' + reason); // undefined
// });
// Vue.prototype.$socket = socket;

Vue.use(new VueSocketIO({
  debug: true,
  connection: 'https://api.doudo.kr',
  transports: ['websocket'],
  vuex: {
      store,
      actionPrefix: 'SOCKET_',
      mutationPrefix: 'SOCKET_'
  },
}))

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
