//  获取课程列表记录
export function useCourseList(page){
  return useHttpGet('useCourseList',() => {
    return `/course/list/?page=${page}`
  })
}
// 查看课程详情
export function useCourseRead(params){
  return useHttpGet('useCourseRead',() => {
    let q = useQueryToString(params)
    return `/course/read${q}`
  },{
    lazy:true
  })
}