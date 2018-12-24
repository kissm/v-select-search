import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import selectSerach from './../packages/index';
Vue.use(selectSerach);


new Vue({
    render: h => h(App),
}).$mount('#app')