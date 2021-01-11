<template>
  <div class="account">
    <a-form name="custom-validation" ref="ruleForm">
      <a-form-item name="pass">
        <label>用户名</label>
        <a-input type="text" autocomplete="off" />
      </a-form-item>
      <a-form-item name="pass">
        <label>密码</label>
        <a-input type="password" autocomplete="off" />
      </a-form-item>

      <a-form-item>
        <a-button type="primary" html-type="submit">Submit</a-button>
      </a-form-item>
    </a-form>
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
