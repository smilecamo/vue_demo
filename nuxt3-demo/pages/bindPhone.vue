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
      <n-input
        v-model:value="form.phone"
        placeholder="请输入手机号"
      />
    </n-form-item>
    <n-form-item label="" path="code" :show-label="false">
      <n-input-group>
        <n-input
        v-model:value="form.code"
        placeholder="请输入验证码"
      />
      <GetCode :phone="form.phone"></GetCode>
    </n-input-group>
    </n-form-item>
    <div>
      <n-button class="w-full" type="primary" @click="onSubmit">
       绑 定
      </n-button>
    </div>
  </n-form>
</template>

<script setup>
import { NForm, NFormItem, NButton, NInput,NInputGroup,createDiscreteApi } from "naive-ui";

definePageMeta({
  layout: "login",
  title:'绑定手机号'
});
useHead({
  title:'绑定手机号'
})
const formRef = ref(null);
const form = reactive({
  phone: "",
  code: "",
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
  };
  return r;
});
const onSubmit = () => {
  formRef.value?.validate(async (errors) => {
    if (!errors) {
      const {error} = await userBindMobile(form)
      const msg = error?.value?.data?.data
      const {message} = createDiscreteApi(['message']) 
      if(msg){
        message.error(msg)
        return
      }
      const route = useRoute()
      if(route.params.form){
        navigateTo({path:route.params.form,replace:true})
      }else{
         navigateTo({path:'/',replace:true})
      }
    } else {
      console.log(errors);
    }
  });
};
useEnterEvent(() => onSubmit());
</script>

<style lang="scss" scoped></style>
