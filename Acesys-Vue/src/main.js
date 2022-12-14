import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "./style/andreas08(green).css"
import "./style/andreas08(orange).css"
import "./style/andreas08(blue).css"
// import articleitem from '@/components/article-item'
// Vue.component(articlelist.name, articlelist)
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$http = axios
axios.defaults.withCredentials = true // session跨域
axios.defaults.baseURL = '/api'
axios.defaults.timeout = 5000
import headerdemo from "./components/headerdemo.vue"
import footerdemo from "./components/footerdemo.vue"
import username from "./components/username.vue"
Vue.component(headerdemo.name, headerdemo)
Vue.component(footerdemo.name,footerdemo)
Vue.component(username.name,username)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
// 添加请求拦截器，在请求头中加token
axios.interceptors.request.use(
  config => {
    if (localStorage.getItem("token")) {
      const tokenHead = localStorage.getItem("tokenHead")
      const token = localStorage.getItem("token")
      config.headers.Authorization = tokenHead +" "+ localStorage.getItem("token");
      // config.headers.token = "123"
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
