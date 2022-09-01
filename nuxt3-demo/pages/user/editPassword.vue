<template>
  <div class="p-5">
    <n-form
    :model="form"
    ref="formRef"
    :rules="rules"
    :inline="false"
    label-placement="left"
    label-width="auto"
  >
    <n-form-item label="原密码" path="opassword" :show-label="false">
      <n-input v-model:value="form.opassword" type="password" placeholder="请输入原密码" />
    </n-form-item>
    <n-form-item label="新密码" path="password" :show-label="false">
      <n-input
        v-model:value="form.password"
        placeholder="请输入密码"
        type="password"
        show-password-on="mousedown"
      />
    </n-form-item>
    <n-form-item label="确认密码" path="repassword" :show-label="false">
      <n-input
        v-model:value="form.repassword"
        :disabled="form.password == ''"
        placeholder="请确认密码"
        type="password"
        show-password-on="mousedown"
      />
    </n-form-item>
    <div class="flex justify-end">
      <n-button type="primary" @click="onSubmit">
        重置密码
      </n-button>
    </div>
  </n-form>
  </div>

</template>

<script setup>
import {
  NForm,
  NFormItem,
  NButton,
  NInput,
  createDiscreteApi,
} from "naive-ui";
const title = ref("修改密码");
definePageMeta({
  title: "修改密码",
});
useHead({
  title,
});
const formRef = ref(null);
const form = reactive({
  opassword:"",
  password: "",
  repassword: "",
});
// 校验规则
const rules = computed(() => {
  let r = {
    opassword: [
      {
        required: true,
        message: "请输入原密码",
      },
    ],
    password: [
      {
        required: true,
        message: "请输入密码",
      },
    ],
    repassword: [
      {
        required: true,
        validator(rule, value) {
          if (!value) {
            return new Error("需要再次输入密码");
          } else if (value !== form.password) {
            return new Error("两次密码不一致");
          }
          return true;
        },
        trigger: ["input", "blur"],
      },
    ],
  };
  return r;
});
const onSubmit = () => {
  formRef.value?.validate(async (errors) => {
    if (!errors) {
      const { error } = await userUserUpdatePasswordApi(form);
      const msg = error?.value?.data?.data;
      const { message } = createDiscreteApi(["message"]);
      if (msg) {
        message.error(msg);
        return;
      }
      await userLogout()
    } else {
    }
  });
};
useEnterEvent(() => onSubmit());
</script>

<style lang="scss" scoped></style>
