import Vue from 'vue'
import App from './App.vue'
import '@/assets/font_icon/iconfont.css'
Vue.config.productionTip = false

import button from './components/button/button.vue'
import dialog from './components/dialog/dialog.vue'
const componentArr = [button,dialog]
componentArr.forEach(item => {
    Vue.component(item.name, item)
})
new Vue({
    render: h => h(App),
}).$mount('#app')