<template>
  <div class="account">
    <a-form name="custom-validation" ref="ruleForm" v-bind="formConfig.layout">
    
      <a-form-item label="Password" name="pass">
        <a-input type="password" autocomplete="off" />
      </a-form-item>

      <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
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
