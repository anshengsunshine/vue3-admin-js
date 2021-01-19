<template>
  <div id="header">
    <div class="collapsed_box" @click="collapsed_btn">
      <svg-icon iconName="collapsed" class="collapsed_icon" />
    </div>
    <div class="header_menu">
      <a-dropdown>
        <a class="ant-dropdown-link" @click="(e) => e.preventDefault()">
          <img src="@/assets/images/logo_s.png" />
        </a>
        <template #overlay>
          <a-menu>
            <a-menu-item key="0">
              <div class="menu_item">
                <svg-icon iconName="user1" />
                13713746864
              </div>
            </a-menu-item>
            <a-menu-divider />
            <a-menu-item key="1">
              <div class="menu_item menu_lang">
                <svg-icon iconName="lang" />
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
              <div class="menu_item">
                <svg-icon iconName="exit" />{{ $t("header_menu.logout") }}
              </div>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
  </div>
</template>

<script>
import { reactive, getCurrentInstance } from "vue";
// 语言
import { useI18n } from "vue-i18n";
export default {
  nsme: "Header",
  setup() {
    const { emit } = getCurrentInstance();

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
    // 设置语言
    const toggleLang = (lang) => {
      locale.value = lang;
      data.lang_current = lang;
    };

    // 设置更换的方法
    const collapsed_btn = () => {
      emit('collapsed');
    };

    return {
      data,
      toggleLang,
      collapsed_btn,
    };
  },
};
</script>

<style lang="scss" scoped>
#header {
  display: flex;
  justify-content: space-between;
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
  color: #ccc;
  svg {
    color: #333;
  }
  span {
    margin-right: 10px;
  }
  .current {
    color: #333;
  }
}
.collapsed_box {
  .collapsed_icon {
    width: 20px;
    height: 20px;
  }
}
</style>
