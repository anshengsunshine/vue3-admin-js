<template>
  <div class="account">
    <div class="form_wrap">
      <a-form name="custom-validation" ref="ruleForm">
        <a-form-item>
          <label>用户名</label>
          <a-input type="text" autocomplete="off" />
        </a-form-item>

        <a-form-item>
          <label>密码</label>
          <a-input type="password" autocomplete="off" />
        </a-form-item>

        <a-form-item>
          <captcha />
        </a-form-item>

        <a-form-item>
          <a-button type="primary" html-type="submit">登录</a-button>
        </a-form-item>
      </a-form>
      <div class="fs_12 text_center">
        <router-link class="color_white" to="/forget">忘记密码</router-link> |
        <router-link class="color_white" to="/register">注册</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive } from "vue";
import Captcha from "@/components/captcha/Index";

export default {
  name: "Login",
  components: {
    Captcha,
  },
  setup(props) {
    const formConfig = reactive({
      layout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
      },
    });

    onMounted(() => {});

    return {
      formConfig,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
