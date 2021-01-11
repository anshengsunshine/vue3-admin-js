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
          <a-button type="primary" html-type="submit">登录</a-button>
        </a-form-item>
      </a-form>
    </div>
    <div>
      <a class="color_white">忘记密码</a> |
      <a class="color_white">注册</a>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "Login",
  setup(props) {
    const formConfig = reactive({
      layout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
      },
    });

    return {
      formConfig,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
