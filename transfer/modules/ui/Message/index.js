import types from "./types";
import MessageComponent from "./Message";
import { createApp, ref, watch } from "vue";
const Message = (options) => {
  const messageApp = createApp(MessageComponent, options);
  showMessage(messageApp, options.duration);
};
const messageArr = ref([]);
function showMessage(app, duration) {
  const dom = document.createDocumentFragment();
  const vm = app.mount(dom);
  messageArr.value.push(vm);
  setTop(vm);
  setzIndex(vm);
  watch(messageArr, function () {
    setTop(vm);
  });
  //   调用内部的方法
  vm.visible.methods.setVisible();
  document.body.appendChild(dom);
  hideMessage(app, vm, duration);
}
function hideMessage(app, vm, duration) {
  vm.timer = setTimeout(async () => {
    messageArr.value = messageArr.value.filter((item) => item !== vm);
    await vm.visible.methods.setVisible();
    app.unmount();
    clearTimeout(vm.timer);
    vm.timer = null;
  }, duration || 3000);
}
function setTop(vm) {
  const { margin, height, setTop } = vm;
  const currentIndex = messageArr.value.findIndex((item) => item === vm);
  setTop(margin * (currentIndex + 1) + height * currentIndex);
}
const index = ref(2022);
function setzIndex(vm) {
  vm.setzIndex((index.value += 1));
}
// types 取value 循环 绑定 Message.error({}) 事件
Object.values(types).forEach((type) => {
  Message[type] = (options) => {
    options.type = type;
    return Message(options);
  };
});
export default Message;
export { types };
