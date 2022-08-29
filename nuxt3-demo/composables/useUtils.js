// 将对象转为string
export function useQueryToString(query= {}){
  let q = ''
  for (const key in query) {
    if(q===''){
      q = `?${key}=${query[key]}`
    }else{
      q+=`&${key}=${query[key]}`
    }
  }
  return q
}
// 鼠标按回车的封装
export function useEnterEvent(event){
  // 按键事件
  function handleEnterEvent(e){
    if(e.key === 'Enter'){
      event()
      e.preventDefault();
    }
  }
  // 页面注册事件
  onBeforeMount(()=>{document.addEventListener('keydown',handleEnterEvent)})
  // 页面取消监听
  onUnmounted(()=>document.removeEventListener('keydown',handleEnterEvent))
}