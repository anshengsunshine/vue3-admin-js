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
      <a-button type="primary" @click="submit">111111111111</a-button>
      <div class="fs_12 text_center">
        <router-link class="color_white" to="/forget">忘记密码</router-link> |
        <router-link class="color_white" to="/register">注册</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, getCurrentInstance } from "vue";
import Captcha from "@/components/captcha/Index";
// 导入api
import { GetCode } from "@/api/account";

export default {
  name: "Login",
  components: {
    Captcha,
  },
  setup(props, { root }) {
    console.log(getCurrentInstance());

    // ctx 相当于 vue2.0 的 this 对象
    // ctx 对象仅在 “开发环境” 可用  --->  “属性” 和 “方法”），“生产环境” 不可用 ---> “属性”  ，
    const { proxy } = getCurrentInstance();

    const formConfig = reactive({
      layout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
      },
    });

    onMounted(() => {});

    const submit = () => {
      GetCode({ id: "11", name: "vv" });
    };

    return {
      formConfig,
      submit,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
