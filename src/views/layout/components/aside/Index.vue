<template>
  <a-menu
    v-model:openKeys="data.openKeys"
    v-model:selectedKeys="data.selectedKeys"
    mode="inline"
    theme="dark"
    :inline-collapsed="collapsed"
  >
    <template v-for="item in routers">
      <!-- 判断是否显示 -->
      <template v-if="!item.hidden">
        <!-- 这里是一级 -->
        <a-menu-item v-if="!item.children" :key="item.path">
          {{ item.meta && item.meta.title }}</a-menu-item
        >

        <!-- 这里是子级 -->
        <Menu :menu="item" v-else />

      </template>
    </template>
  </a-menu>
</template>

<script>
import { reactive } from "vue";
// 路由
import { useRouter } from "vue-router";
// 组件
import Menu from "./Menu";
export default {
  nsme: "Aside",
  components: {
    Menu,
  },
  setup() {
    // console.log(useRouter());

    // 路由
    const { options } = useRouter();
    const routers = options.routes;

    // 定义数据
    const data = reactive({
      collapsed: false,
      selectedKeys: ["2"],
      openKeys: ["/adminIndex"],
    });

    return {
      data,
      routers,
    };
  },
};
</script>
