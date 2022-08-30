<template>
  <n-form
    class="w-[320px]"
    :model="form"
    ref="formRef"
    :rules="rules"
    :inline="false"
    size="large"
  >
    <n-form-item label="" path="phone" :show-label="false">
      <n-input v-model:value="form.phone" placeholder="请输入手机号" />
    </n-form-item>
    <n-form-item label="" path="code" :show-label="false">
      <n-input-group>
        <n-input v-model:value="form.code" placeholder="请输入验证码" />
        <GetCode :phone="form.phone"></GetCode>
      </n-input-group>
    </n-form-item>
    <n-form-item label="" path="password" :show-label="false">
      <n-input
        v-model:value="form.password"
        placeholder="请输入密码"
        type="password"
        show-password-on="mousedown"
      />
    </n-form-item>
    <n-form-item label="" path="repassword" :show-label="false">
      <n-input
        v-model:value="form.repassword"
        :disabled="form.password == ''"
        placeholder="请确认密码"
        type="password"
        show-password-on="mousedown"
      />
    </n-form-item>
    <div class="w-full flex justify-between pb-2">
      <n-button quaternary type="primary" @click="navigateTo('/login')">
        登录
      </n-button>
    </div>
    <div>
      <n-button class="w-full" type="primary" @click="onSubmit">
        重置密码
      </n-button>
    </div>
  </n-form>
</template>

<script setup>
import {
  NForm,
  NFormItem,
  NButton,
  NInput,
  NInputGroup,
  createDiscreteApi,
} from "naive-ui";
const title = ref("重置密码");
definePageMeta({
  layout: "login",
  title: "重置密码",
});
useHead({
  title,
});
const formRef = ref(null);
const form = reactive({
  phone: "",
  code: "",
  password: "",
  repassword: "",
});
// 校验规则
const rules = computed(() => {
  let r = {
    phone: [
      {
        required: true,
        message: "请输入手机号",
      },
    ],
    code: [
      {
        required: true,
        message: "请输入验证码",
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
      const { error } = await userForgetApi(form);
      const msg = error?.value?.data?.data;
      const { message } = createDiscreteApi(["message"]);
      if (msg) {
        message.error(msg);
        return;
      }
      const route = useRoute();
      if (route.params.form) {
        navigateTo({ path: route.params.form, replace: true });
      } else {
        navigateTo({ path: "/", replace: true });
      }
    } else {
      console.log(errors);
    }
  });
};
useEnterEvent(() => onSubmit());
</script>

<style lang="scss" scoped></style>
