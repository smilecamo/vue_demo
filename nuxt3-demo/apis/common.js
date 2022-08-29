
export function getSearchList(params){
  return useHttpGet('getSearchList',() => {
    let q = useQueryToString(params())
    return `/search${q}`
  })
}