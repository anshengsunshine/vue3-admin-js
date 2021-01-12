<template>
  <h1 id="logo">
    <img :src="data.logo" />
  </h1>
  <a-menu
    class="aside_menu"
    v-model:openKeys="data.openKeys"
    v-model:selectedKeys="data.selectedKeys"
    mode="inline"
    theme="dark"
    @click="selectMenu"
    @openChange="openMenu"
  >
    <template v-for="item in routers">
      <!-- 判断是否显示 -->
      <template v-if="!item.hidden">
        <!-- 这里是一级 -->
        <a-menu-item v-if="!item.children" :key="item.path">
          <router-link :to="item.path">
            <i class="icon icon_size_21 mb_-5" :class="item.meta && item.meta.icon"></i>
            {{ item.meta && item.meta.title }}
          </router-link>
        </a-menu-item>

        <!-- 这里是子级 -->
        <Menu :menu="item" v-else :key="item.path" />
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
      selectedKeys: localStorage.getItem("selectedKeys")
        ? [localStorage.getItem("selectedKeys")]
        : [],
      openKeys: localStorage.getItem("openKeys")
        ? [localStorage.getItem("openKeys")]
        : [],
      logo: require("@/assets/images/logo.png"),
    });

    // 定义方法
    const selectMenu = ({ item, key, keyPath }) => {
      console.log("item", item);
      console.log("key", key);
      console.log("keyPath", keyPath);
      data.selectedKeys = [key];
      localStorage.setItem("selectedKeys", key);
    };
    const openMenu = (openKeys) => {
      console.log("openKeys", openKeys);
      localStorage.setItem("openKeys", openKeys);
    };

    return {
      data,
      routers,
      selectMenu,
      openMenu,
    };
  },
};
</script>
<style lang="scss" scoped>
#logo {
  padding: 24px 0 20px;
  border-bottom: 1px solid #000;
  text-align: center;
  img {
    display: inline-block;
  }
}
.aside_menu {
  i.icon {
    margin-right: 5px;
    opacity: 0.6;
  }
  .ant-menu-item-selected {
    i.icon {
      opacity: 1;
    }
  }
}
</style>
