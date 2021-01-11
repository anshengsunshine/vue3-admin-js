<template>
  <div id="header">
    <div class="header_menu">
      <a-dropdown>
        <a class="ant-dropdown-link" @click="(e) => e.preventDefault()">
          <img src="@/assets/logo.png" />
        </a>
        <template #overlay>
          <a-menu>
            <a-menu-item key="0">
              <div class="menu_item">13713746864</div>
            </a-menu-item>
            <a-menu-divider />
            <a-menu-item key="1">
              <div class="menu_item menu_lang">
                <span
                  @click="toggleLang(lang.value)"
                  v-for="lang in data.lang"
                  :key="lang.value"
                  :class="{ current: data.lang_current == lang.value }"
                  >{{ lang.label }}</span
                >
              </div>
            </a-menu-item>
            <a-menu-divider />
            <a-menu-item key="2">
              <div class="menu_item">{{ $t("header_menu.logout") }}</div>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
// 语言
import { useI18n } from "vue-i18n";
export default {
  nsme: "Header",
  setup() {
    // 扩展语言
    const { locale } = useI18n({ useScope: "global" });

    // 定义数据
    const data = reactive({
      lang: [
        { label: "中文", value: "ch" },
        { label: "En", value: "en" },
      ],
      lang_current: "ch",
    });

    // 定义方法
    const toggleLang = (lang) => {
      locale.value = lang;
      data.lang_current = lang;
    };

    return {
      data,
      toggleLang,
    };
  },
};
</script>

<style lang="scss" scoped>
#header {
  padding: 0 20px;
  height: 64px;

  .header_menu {
    float: right;
    margin-top: 15px;
    .ant-dropdown-link img {
      width: 30px;
      background-color: #1d6f11;
      border-radius: 50%;
    }
  }
}
.menu_item {
  padding: 0 10px;
  color: #333;
  font-size: 14px;
  font-weight: "黑体";
}
.menu_lang {
  color: #aaa;
  span {
    margin-right: 10px;
  }
  .current {
    color: #333;
  }
}
</style>
