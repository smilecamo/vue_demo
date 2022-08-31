<template>
  <n-form
    ref="formRef"
    :model="model"
    :rules="rules"
    label-placement="left"
    :label-width="80"
    class="p-4"
  >
    <n-form-item label="用户名:">
      <n-input v-model:value="model.username" disabled />
    </n-form-item>
    <n-form-item label="头像:">
    <Uploader v-model="model.avatar"></Uploader>
     </n-form-item>
    <n-form-item path="nickname" label="昵称:">
      <n-input v-model:value="model.nickname" placeholder="请输入昵称" />
    </n-form-item>
    <n-form-item path="sex" label="性别:">
      <n-radio-group v-model:value="model.sex">
        <n-radio value="未知"> 未知 </n-radio>
        <n-radio value="男"> 男 </n-radio>
        <n-radio value="女"> 女 </n-radio>
      </n-radio-group>
    </n-form-item>

    <div style="display: flex; justify-content: flex-end">
      <n-button type="primary" @click="handleValidateButtonClick">
        修改信息
      </n-button>
    </div>
  </n-form>
</template>

<script setup>
import {
  NForm,
  NFormItem,
  NInput,
  NButton,
  createDiscreteApi,
  NRadioGroup,
  NRadio,
} from "naive-ui";
const formRef = ref(null);
const user = useUser();
// 表单信息
const model = reactive({
  username: "",
  nickname: "",
  avatar: "",
  sex: "",
});
// 用户信息赋值表单信息
if (user.value) {
  model.avatar = user.value.avatar;
  model.nickname = user.value.nickname;
  model.sex = user.value.sex;
  model.username = user.value.username;
}
const rules = {
  nickname: {
    required: true,
    trigger: ["blur", "change"],
    message: "请输入昵称",
  },
  sex: {
    required: true,
    trigger: ["blur", "change"],
    message: "请选择性别",
  },
};
const loading = ref(false);
// 提交信息
const handleValidateButtonClick = () => {
  const { message } = createDiscreteApi(["message"]);
  formRef.value?.validate(async (errors) => {
    if (!errors) {
      loading.value = true;
      const { error, data } = await useUserUpdateInfo(model);
      loading.value = false;
      if (error.value) {
        return;
      }
      message.success("修改成功");
      userRefreshUserInfo();
    } else {
      console.log(errors);
      message.error("验证失败");
    }
  });
};
</script>

<style lang="scss" scoped></style>
