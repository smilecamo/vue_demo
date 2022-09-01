
export function getSearchList(params){
  return useHttpGet('getSearchList',() => {
    let q = useQueryToString(params())
    return `/search${q}`
  })
}
// 推荐列表
export function useHotList(){
  return useHttpGet('useHotList',`/hot`)
}