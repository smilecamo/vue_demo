// 用户信息
export const useUser = () => useState("user", () => null)
// 重新获取用户信息
export async function userRefreshUserInfo() {
  const token = useCookie("token");
  const user = useUser();
  if (token.value) {
    let { data, error } = await getUserInfoApi();
    if (data.value) {
      user.value = data.value;
    }
  }
}

// 退出登录
export async function userLogout() {
  await userLogoutApi()
  const token = useCookie("token");
  token.value = null
  const user = useUser();
  user.value = null
  const route = useRoute()
  if(route.path != '/'){
    navigateTo({path:'/',replace:true})
  }
}
