<template>
  <div class="account">
    <div class="form_wrap">
      <a-form
        name="custom-validation"
        ref="ruleForm"
        :model="account_form"
        :rules="rules_form"
        @finish="handFinish"
      >
        <a-form-item name="username">
          <label>用户名</label>
          <a-input v-model:value="account_form.username" type="text" autocomplete="off" />
        </a-form-item>

        <a-form-item name="password">
          <label>密码</label>
          <a-input v-model="account_form.password" type="password" autocomplete="off" />
        </a-form-item>

        <a-form-item name="passwords">
          <label>确认密码</label>
          <a-input v-model="account_form.passwords" type="password" autocomplete="off" />
        </a-form-item>

        <a-form-item>
          <label>验证码</label>
          <a-row :gutter="15">
            <a-col :span="14">
              <a-input v-model="account_form.code" type="text" autocomplete="off" />
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
    let checkUsername = async (rule, value, callback) => {
      console.log(value)
      if (!value) {
        return Promise.reject("Please input the age");
      }
      if (!Number.isInteger(value)) {
        return Promise.reject("Please input digits");
      } else {
        if (value < 18) {
          return Promise.reject("Age must be greater than 18");
        } else {
          return Promise.resolve();
        }
      }
    };

    // 定义数据
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
      rules_form: {
        username: [{ validator: checkUsername, trigger: 'change' }],
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
