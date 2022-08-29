// 我的帖子列表
export function bbsMyPostList(page){
  return useHttpGet('bbsMyPostList',() => {
    return `/mypost?page=${page}`
  })
}
// support 点赞 unsupport取消点赞
export function bbsPost(body,type="support"){
  return useHttpPost('bbsPost',`/post/${type}`,{
    body
  })
}
// 删除帖子
export function bbsDelete(body){
  return useHttpPost('bbsDelete',`/post/delete`,{
    body
  })
}