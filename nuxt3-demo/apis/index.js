export function getIndex(){
  return useHttpGet('indexData','/index')
}
export function getGroupList(params){
  let q = useQueryToString(params)
  return useHttpGet('groupList',`/group/list${q}`)
}