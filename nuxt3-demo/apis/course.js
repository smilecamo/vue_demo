//  获取课程列表记录
export function useCourseList(page){
  return useHttpGet('useCourseList',() => {
    return `/course/list/?page=${page}`
  })
}