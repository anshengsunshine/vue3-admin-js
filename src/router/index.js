import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  // 登录
  {
    path: "/",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "Login" */ "../views/acount/Login.vue")
  },
  // 注册
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "Register" */ "../views/acount/Register.vue")
  },
  // 忘记密码 
  {
    path: "/forget",
    name: "Forget",
    component: () =>
      import(/* webpackChunkName: "Forget" */ "../views/acount/Forget.vue")
  },
  // 首页
  {
    path: "/index",
    name: "Index",
    component: () =>
      import(/* webpackChunkName: "Index" */ "../views/layout/Index.vue")
  },
  // 信息管理
  {
    path: "/newsIndex",
    name: "NewsIndex",
    component: () =>
      import(/* webpackChunkName: "Index" */ "../views/layout/Index.vue")
  },
  {
    path: "/news",
    name: "News",
    component: () =>
      import(/* webpackChunkName: "news" */ "../views/news/Index.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
