import { createRouter, createWebHashHistory } from "vue-router";
import Role from "../views/admin/Role.vue";
import Home from "../views/Home.vue";

const routes = [
  // 登录
  {
    path: "/",
    name: "Login",
    hidden: true,
    meta: { title: "登录" },
    component: () =>
      import(/* webpackChunkName: "Login" */ "../views/acount/Login.vue")
  },
  // 注册
  {
    path: "/register",
    name: "Register",
    hidden: true,
    meta: { title: "注册" },
    component: () =>
      import(/* webpackChunkName: "Register" */ "../views/acount/Register.vue")
  },
  // 忘记密码 
  {
    path: "/forget",
    name: "Forget",
    hidden: true,
    meta: { title: "忘记密码" },
    component: () =>
      import(/* webpackChunkName: "Forget" */ "../views/acount/Forget.vue")
  },
  // 管理后台 - 首页
  {
    path: "/index",
    name: "Index",
    meta: { title: "首页" },
    component: () =>
      import(/* webpackChunkName: "Index" */ "../views/layout/Index.vue")
  },
  // 管理后台 - 信息管理
  {
    path: "/adminIndex",
    name: "AdminIndex",
    meta: {
      title: "管理总台"
    },
    component: () =>
      import(/* webpackChunkName: "Index" */ "../views/layout/Index.vue"),
    children: [
      {
        path: "/role",
        name: "Role",
        meta: {
          title: "角色管理"
        },
        component: () =>
          import(/* webpackChunkName: "Role" */ "../views/admin/Role.vue"),
      },
      {
        path: "/user",
        name: "User",
        meta: {
          title: "用户管理"
        },
        component: () =>
          import(/* webpackChunkName: "User" */ "../views/admin/User.vue"),
      }
    ]
  },
  {
    path: "/news",
    name: "News",
    meta: { title: "信息管理" },
    component: () =>
      import(/* webpackChunkName: "news" */ "../views/news/Index.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
