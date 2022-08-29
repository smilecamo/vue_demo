import { createDiscreteApi } from "naive-ui";
// 判权限 进行跳转操作
export async function useHasAuth(call) {
  // 用户token
  const token = useCookie("token");
  // 用户信息
  const user = useUser();
  const route = useRoute();
  const { message } = createDiscreteApi(["message"]);
  // 没有登录
  if (!token.value) {
    message.error("请先登录");
    return navigateTo("/login?form=" + route.fullPath);
  }
  // 手机号未绑定
  const phone = user.value?.phone;
  if (!phone && route.path !== "bindPhone") {
    message.error("请先绑定手机号");
    return navigateTo("/bindPhone?form=" + route.fullPath);
  }
  if (call && typeof call === "function") {
    call();
  }
}
// 点赞操作
export const supPost = () => {
  const isLoading = ref(false);
  const handleSupPost = (item) => {
    useHasAuth(async () => {
      isLoading.value = true;
      // item.issupport = false 未点赞
      const { issupport, id } = item;
      const type = issupport ? "unsupport" : "support";
      const msg = issupport ? "取消点赞" : "点赞";
      const { error } = await bbsPost({ post_id: id }, type);
      isLoading.value = false;
      if (error.value) return;
      const { message } = createDiscreteApi(["message"]);
      if (type === "unsupport") {
        item.support_count--;
      } else {
        item.support_count++;
      }
      message.success(msg + "成功");
      item.issupport = !item.issupport;
    });
  };
  return { handleSupPost, isLoading };
};
