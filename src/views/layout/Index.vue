<template>
  <a-layout id="layout_main">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <LayoutAside :collapsed="collapsed" />
    </a-layout-sider>

    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <LayoutHeader @collapsed="handleCollapsed" />
      </a-layout-header>

      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px',
        }"
      >
        <LayoutMain />
      </a-layout-content>
       <a-layout-footer>
      <layoutFooter class="layout_footer_wrap" />
    </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import LayoutAside from "./components/aside/Index";
import LayoutHeader from "./components/Header";
import LayoutMain from "./components/Main";
import LayoutFooter from "./components/Footer";

import { reactive, toRefs } from "vue";

import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons-vue";

export default {
  name: "Layout",
  components: {
    LayoutAside,
    LayoutHeader,
    LayoutMain,
    LayoutFooter,
  },
  setup(props) {
    const data = reactive({
      selectedKeys: ["1"],
      collapsed: JSON.parse(localStorage.getItem("collapsed")),
    });

    const handleCollapsed = (value) => {
      const bool = !data.collapsed;
      data.collapsed = bool;
      localStorage.setItem("collapsed", bool);
    };

    return {
      ...toRefs(data),
      handleCollapsed,
    };
  },
};
</script>

<style lang="scss">
#layout_main {
  height: 100vh;
}
</style>
