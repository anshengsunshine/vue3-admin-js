<template>
  <a-layout id="layout_main">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <layout-aside />
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <layout-header />
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px',
        }"
      >
        <layout-main />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import LayoutAside from "./componrnts/Aside";
import LayoutHeader from "./componrnts/Header";
import LayoutMain from "./componrnts/Main";

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
  },
  setup(props) {
    const data = reactive({
      selectedKeys: ["1"],
      collapsed: false,
    });

    return {
      ...toRefs(data),
    };
  },
};
</script>

<style lang="scss">
#layout_main {
  height: 100vh;
}
</style>
