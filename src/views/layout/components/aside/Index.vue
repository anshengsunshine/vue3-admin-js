<template>
  <h1 id="logo">
    <img v-if="!collapsed" :src="data.logo" />
    <img v-else :src="data.logo_s" />
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
        <a-menu-item v-if="hasOnlyChildren(item)" :key="item.path">
          <router-link :to="item.children[0].path">
            <span class="anticon">
              <svg-icon
                className="aside_svg"
                :iconName="item.meta && item.meta.icon"
              ></svg-icon>
            </span>
            <span>{{ item.children[0].meta && item.children[0].meta.title }}</span>
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
  props: {
    collapsed: {
      type: Boolean,
      default: false,
    },
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
        ? JSON.parse(localStorage.getItem("openKeys"))
        : [],
      logo: require("@/assets/images/logo.png"),
      logo_s: require("@/assets/images/logo_s.png"),
    });

    // 定义方法
    // 选择菜单
    const selectMenu = ({ item, key, keyPath }) => {
      data.selectedKeys = [key];
      localStorage.setItem("selectedKeys", key);
    };
    // 展开/关闭菜单
    const openMenu = (openKeys) => {
      localStorage.setItem("openKeys", JSON.stringify(openKeys));
    };
    // 检测是否只有一个子路由
    const hasOnlyChildren = (data) => {
      // 不存在子级的情况
      if (!data.children) {
        return false;
      }
      // 过滤隐藏的子级路由
      const routers = data.children.filter((item) => (item.hidden ? false : true));
      // 判断最终结果
      if (routers.length === 1) {
        return true;
      }
      return false;
    };

    return {
      data,
      routers,
      selectMenu,
      openMenu,
      hasOnlyChildren,
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
