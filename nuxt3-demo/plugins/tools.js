export default defineNuxtPlugin(() => {
  return {
    provide: {
      // 打开网址
      openUrl: (item) => {
        if (item.type === "webview") window.open(item.url);
        else if(item.type === "course") navigateTo(`/list/column/1/${item.course_id}`)
      },
    },
  };
});
