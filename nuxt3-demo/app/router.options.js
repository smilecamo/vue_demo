export default{
  scrollBehavior (to, from, savedPosition) {
    // return desired position
    if(savedPosition){
      return savedPosition
    }
    return { top: 0 }
  }
}