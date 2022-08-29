export async function usePage (initCallback) {
  const route = useRoute();
  const page = ref(+route.params.page);
  const limit = ref(10);
  // 网络数据
  const { data, pending, error, refresh } = await initCallback({
    page:page.value,
    limit:limit.value
  })
  // 页码数据初始化
const pageData = computed(() => data.value?.rows ?? []);
// 页码
const itemCount = computed(() => data.value?.count ?? 0);
// 页面更新
const updatePage = (pageNumber) => {
  return navigateTo({
    name: route.name,
    params: {
      ...route.params,
      page: pageNumber,
    },
    query: {
      ...route.query,
    },
  });
};
  return {pageData,itemCount, pending, error, refresh,updatePage,page}
}