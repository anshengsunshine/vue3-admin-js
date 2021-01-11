<template>
  <div class="account">
    <div class="form_wrap">
      <a-form name="custom-validation" ref="ruleForm" @finish="handFinish">
        <a-form-item>
          <label>用户名</label>
          <a-input type="text" autocomplete="off" />
        </a-form-item>

        <a-form-item>
          <label>密码</label>
          <a-input type="password" autocomplete="off" />
        </a-form-item>

        <a-form-item>
          <label>确认密码</label>
          <a-input type="password" autocomplete="off" />
        </a-form-item>

        <a-form-item>
          <label>验证码</label>
          <a-row :gutter="15">
            <a-col :span="14">
              <a-input type="text" autocomplete="off" />
            </a-col>
            <a-col :span="10">
              <a-button type="primary" block>获取验证码</a-button>
            </a-col>
          </a-row>
        </a-form-item>

        <a-form-item>
          <a-button type="primary" html-type="submit">登录</a-button>
        </a-form-item>
      </a-form>
      <div class="fs_12 text_center">
        <a class="color_white">忘记密码</a>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, toRefs } from "vue";

export default {
  name: "Login",
  setup(props) {
    const formConfig = reactive({
      layout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
      },
      account_form: {
        username: "",
        password: "",
        passwords: "",
        code: "",
      },
    });
    const data = toRefs(formConfig);

    onMounted(() => {});
    const handFinish = () => {};

    return {
      ...data,
      handFinish,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
