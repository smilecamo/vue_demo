// 立即学习
export function useOrderLearn(body){
  return useHttpPost('orderLearn','/order/learn',{
    body
  })
}