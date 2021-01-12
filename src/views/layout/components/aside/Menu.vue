<template>
  <a-sub-menu :key="menu.path">
    <template #title>
      <span>
        <i class="icon icon_size_21 mb_-5" :class="menu.meta && menu.meta.icon"></i>
        {{ menu.meta && menu.meta.title }}
      </span>
    </template>

    <template v-if="menu.children.length">
      <template v-for="item in menu.children">
        <!--不存在子级的栏目-->
        <a-menu-item v-if="!item.children" :key="item.path">
          <router-link :to="item.path"> {{ item.meta && item.meta.title }} </router-link>
        </a-menu-item>
        <!--存在子级栏目-->
        <Menu v-else :menu="item" />
      </template>
    </template>
  </a-sub-menu>
</template>

<script>
export default {
  name: "Menu",
  props: {
    menu: {
      type: Object,
      default: () => ({}),
    },
  },
  setup() {},
};
</script>

<style lang="scss" scoped>
.aside_menu {
  i.icon {
    margin-right: 5px;
    opacity: 0.6;
  }
  .ant-menu-submenu-open {
    > div {
      i.icon {
        opacity: 1;
      }
    }
  }
}
</style>
