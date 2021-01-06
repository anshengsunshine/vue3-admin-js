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
          <a-input
            v-model:value="account_form.password"
            type="password"
            autocomplete="off"
          />
        </a-form-item>

        <a-form-item name="passwords">
          <label>确认密码</label>
          <a-input
            v-model:value="account_form.passwords"
            type="password"
            autocomplete="off"
          />
        </a-form-item>

        <a-form-item name="code">
          <label>验证码</label>
          <a-row :gutter="15">
            <a-col :span="14">
              <a-input
                maxlength="6"
                v-model:value="account_form.code"
                type="text"
                autocomplete="off"
              />
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
// 导入验证类的方法
import {
  checkPhone as phone,
  checkPassword as password,
  checkCode as code,
} from "../../utils/varification";
import { onMounted, reactive, toRefs } from "vue";

export default {
  name: "Login",
  setup(props) {
    /**
     * 验证-手机号
     */
    let checkUsername = async (rule, value, callback) => {
      if (!value) {
        return Promise.reject("请输入手机号"); // 校验为空
      } else if (!phone(value)) {  // 手机号输入有误
        return Promise.reject("请输入11位数字的手机号");
      } else {
        return Promise.resolve();
      }
    };

    /**
     * 验证-密码
     */
    let checkPassword = async (rule, value, callback) => {
      const passwords = formConfig.account_form.passwords;
      if (!value) {
        return Promise.reject("请输入密码"); // 校验为空
      } else if (!password(value)) {
        return Promise.reject("请设置6-20位含数字、字母的密码");
      } else if (passwords && value && passwords !== value) {
        // 必须是两个密码都存在的情况下，在检验两个密码是否一致
        return Promise.reject("两次密码不一致");
      } else {
        return Promise.resolve();
      }
    };

    /**
     * 验证-重复校验-密码
     */
    let checkPasswords = async (rule, value, callback) => {
      const pas = formConfig.account_form.password;
      if (!value) {
        return Promise.reject("请再次输入密码"); // 校验为空
      } else if (!password(value)) {
        return Promise.reject("请设置6-20位含数字、字母的密码");
      } else if (pas && value && pas !== value) {
        // 必须是两个密码都存在的情况下，在检验两个密码是否一致
        return Promise.reject("两次密码不一致");
      } else {
        return Promise.resolve();
      }
    };

    /**
     * 验证-验证码
     */
    let checkCode = async (rule, value, callback) => {
      if (!value) {
        return Promise.reject("请输入验证码"); // 校验为空
      } else if (!code(value)) {
        return Promise.reject("请输入6位的数字+英文");
      } else {
        return Promise.resolve();
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
        username: [{ validator: checkUsername, trigger: "change" }],
        password: [{ validator: checkPassword, trigger: "change" }],
        passwords: [{ validator: checkPassword, trigger: "change" }],
        code: [{ validator: checkCode, trigger: "change" }],
      },
    });
    const data = toRefs(formConfig);

    onMounted(() => {});
    const handFinish = (value) => {
      console.log(value);
    };

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
