<template>
  <div class="flex">
    <div class="time">
      {{ d.day }}
    </div>
    天
    <div class="time">
      {{ d.hour }}
    </div>:
    <div class="time">
      {{ d.minute }}
    </div>:
    <div class="time">
      {{ d.second }}
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  time: {
    type: String,
  },
});

let time = new Date(props.time).getTime();
let Timer = ref(null);
const d = downTime();

function downTime() {
  let now = new Date().getTime();
  let timeOut = ref(0)
  timeOut.value = (time - now) / 1000;
  if (timeOut.value <= 0) return;
  close();
  Timer.value = setInterval(() => {
    timeOut.value--;
    if (timeOut.value <= 0) {
      close();
    }
  }, 1000);
  let dow = computed(() => {
    return formateTime(timeOut.value);
  });
  return dow;
}
function close() {
  clearInterval(Timer.value);
}
function formateTime(s) {
  var day = Math.floor(s / (24 * 3600)); // Math.floor()向下取整
  var hour = Math.floor((s - day * 24 * 3600) / 3600);
  var minute = Math.floor((s - day * 24 * 3600 - hour * 3600) / 60);
  var second = Math.floor(s - day * 24 * 3600 - hour * 3600 - minute * 60);
  return {
    day,
    hour: hour < 10 ? "0" + hour : hour,
    minute: minute < 10 ? "0" + minute : minute,
    second: second < 10 ? "0" + second : second,
  };
}
</script>

<style scoped>
.time{
  @apply px-1 mx-1 bg-white text-yellow-400
}
</style>
