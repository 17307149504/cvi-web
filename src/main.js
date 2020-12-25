import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
Vue.config.productionTip = false;
Vue.use(ElementUI, { locale })
axios.defaults.baseURL = 'https://comorbidity.comp-sysbio.org/';
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
