import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// ant-design-vue
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
// axios
import axios from "axios"
// 国际化 - 语言
// http://kazupon.github.io/vue-i18n/zh/
import VueI18n from "./language";
// svg 全局组件
import SvgIcon from "@/components/svgIcon/Index";
//svg 图标文件解析
import './utils/svg';

const app = createApp(App)
// 注入 axios
app.config.globalProperties.$axios = axios


createApp(App)
  .use(store)
  .use(router)
  .use(Antd)
  .use(VueI18n)
  .component('svg-icon', SvgIcon)
  .mount("#app");
