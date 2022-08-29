<template>
  <div>
    <n-button
      type="primary"
      ghost
      :disabled="phone == '' || time>0"
      :loading="loading"
      @click="getCode"
    >
      {{ textTip }}
    </n-button>
  </div>
</template>

<script setup>
import { NButton, createDiscreteApi } from "naive-ui";
const props = defineProps(["phone"]);
let time = ref(0);
const timer = ref(null);
const loading = ref(false);
const textTip = computed(() => {
  if (loading.value) {
    return "发送中...";
  } else if (time.value > 0) {
    return time.value + "s";
  } else {
    return "获取验证码";
  }
});
const getCode = async () => {
  loading.value = true;
  const {data,error} = await userGetCaptcha(props.phone)
  loading.value = false;
  const msg = error?.value?.data?.data
  const {message} = createDiscreteApi(['message']) 
  if(msg){
    message.error(msg)
    return
  }
  message.info(`发送成功：验证码为${data.value}`)
  time.value = 60;
  // 清除定时器
  timer.value && clearInterval(timer.value);
  // 开启定时
  timer.value = setInterval(() => {
    time.value--;
    if (time.value <= 0) {
      clearInterval(timer.value);
    }
  }, 1000);
  loading.value = false;
};
</script>
