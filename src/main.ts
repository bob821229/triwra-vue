import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 導入 jQuery
import $ from 'jquery';
window.jQuery = window.$ = $; // 将 jQuery 暴露到全局命名空间中

// 導入Bootstrap样式
import 'bootstrap/dist/css/bootstrap.css';
// 導入Bootstrap JavaScript
import 'bootstrap/dist/js/bootstrap.bundle';
//導入 Bootstrap Icons 的 CSS 
import 'bootstrap-icons/font/bootstrap-icons.css';

// 導入Bootstrap Table
import 'bootstrap-table';
// 導入Bootstrap Table的css
import 'bootstrap-table/dist/bootstrap-table.min.css';

// import { VueRecaptchaPlugin } from 'vue-recaptcha'
// import { VueReCaptcha } from 'vue-recaptcha-v3';
import { VueRecaptchaPlugin } from 'vue-recaptcha/head'


// 導入 Owl Carousel輪播 的 CSS 和 JavaScript
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel';

const app = createApp(App)
// app.use(VueReCaptcha, {
//     siteKey: '6LeSC6YpAAAAACs9UiTyYRTW-uaDXttA6UML6u-E',
//     loaderOptions: {
//       useRecaptchaNet: true,
//     },
//   });
app.use(VueRecaptchaPlugin, {
  v2SiteKey: '6LfiNagpAAAAAHMu1v6CqjjOR9830A4YCZHpNT-p',
  v3SiteKey: '6LeSC6YpAAAAACs9UiTyYRTW-uaDXttA6UML6u-E',
})
app.use(createPinia())
app.use(router)

app.mount('#app')
