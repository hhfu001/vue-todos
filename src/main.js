import Vue from 'vue'
import App from './views/app.vue';

require('!style-loader!css-loader!less-loader!./assets/main.less');


new Vue({
  el: '#app',
  render: h => h(App)
})
