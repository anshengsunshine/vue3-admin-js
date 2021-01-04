<template>
  <div class="account">
    <a-form
      name="custom-validation"
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      v-bind="layout"
      @finish="handleFinish"
      @finishFailed="handleFinishFailed"
    >
      <a-form-item required has-feedback label="Password" name="pass">
        <a-input v-model:value="ruleForm.pass" type="password" autocomplete="off" />
      </a-form-item>
      <a-form-item has-feedback label="Confirm" name="checkPass">
        <a-input v-model:value="ruleForm.checkPass" type="password" autocomplete="off" />
      </a-form-item>
      <a-form-item has-feedback label="Age" name="age">
        <a-input-number v-model:value="ruleForm.age" />
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button type="primary" html-type="submit">Submit</a-button>
        <a-button style="margin-left: 10px" @click="resetForm">Reset</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "Login",
  setup(props, {}) {
    const layout = reactive({
      layout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 }
      }
    });
  }
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>