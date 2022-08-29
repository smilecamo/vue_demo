<template>
  <n-form
    class="w-[320px]"
    :model="form"
    ref="formRef"
    :rules="rules"
    :inline="false"
    size="large"
  >
    <n-form-item label="" path="username" :show-label="false">
      <n-input
        v-model:value="form.username"
        :placeholder="type !== 'login' ? '用户名' : '请输入账户名或邮箱'"
      />
    </n-form-item>
    <n-form-item label="" path="password" :show-label="false">
      <n-input
        v-model:value="form.password"
        placeholder="请输入密码"
        type="password"
        show-password-on="mousedown"
      />
    </n-form-item>
    <n-form-item
      label=""
      path="repassword"
      :show-label="false"
      v-if="type !== 'login'"
    >
      <n-input
        v-model:value="form.repassword"
        placeholder="请确认密码"
        type="password"
        show-password-on="mousedown"
      />
    </n-form-item>
    <div class="w-full flex justify-between pb-2">
      <n-button quaternary type="primary" @click="changeType">
        {{ type !== "login" ? "登录" : "注册" }}
      </n-button>
      <n-button quaternary type="primary" @click="navigateTo('/forget')"> 忘记密码？ </n-button>
    </div>
    <div>
      <n-button class="w-full" type="primary" @click="onSubmit">
        {{ type === "login" ? "登 录" : "注 册" }}
      </n-button>
    </div>
  </n-form>
</template>

<script setup>
import { NForm, NFormItem, NButton, NInput,createDiscreteApi } from "naive-ui";
definePageMeta({
  layout: "login",
   middleware: ["only"]
});
const title = ref("登录");
const type = ref("login");
const route = useRoute();
useHead({
  title,
});
const changeType = () => {
  type.value = type.value === "login" ? "reg" : "login";
  title.value = type.value === "login" ? "登录" : "注册";
  route.meta.title = title.value; // 设置标题
  formRef.value?.restoreValidation(); // 重置验证
  form.username = ''
  form.password = ''
  form.repassword = ''
};

const formRef = ref(null);
const form = reactive({
  username: "",
  password: "",
  repassword: "",
});
// 校验规则
const rules = computed(() => {
  let r = {
    username: [
      {
        required: true,
        message: type.value === "login" ? "请输入账户名或邮箱" : "请输入账户名",
      },
    ],
    password: [
      {
        required: true,
        message: "请输入密码",
      },
    ],
  };
  // 动态添加一个校验
  if (type.value !== "login") {
    r.repassword = [
      {
        required: true,
        validator(rule, value) {
          if (!value) {
            return new Error("请再次输入密码");
          } else if (value !== form.password) {
            return new Error("两次密码不一致");
          }
          return true;
        },
        trigger: ["input", "blur"],
      },
    ];
  }
  return r;
});
const onSubmit = () => {
  formRef.value?.validate(async (errors) => {
    if (!errors) {
      const {message} = createDiscreteApi(['message'])
      const { data,error } =type.value == "login" ? await loginApi(form) : await regApi(form);
      if (type.value == "login") {
        //  设置cookie
        if(!error.value){
          const counter = useCookie("token");
          counter.value = data.value?.token || "";
          // 设置用户信息
          const user = useUser();
          user.value = data.value;
          // 跳转
          await navigateTo(route.query.form ?? "/", { replace: true });
        }

      } else {
        message.success('成功')
        changeType()
      }
    } else {
      console.log(errors);
    }
  });
};
useEnterEvent(() => onSubmit());
</script>

<style lang="scss" scoped></style>
