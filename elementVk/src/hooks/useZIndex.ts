import { computed, ref } from 'vue'
const zIndex = ref(0)

const useZIndex = (initialValue = 2000) => {
  const initZIndex = ref(initialValue)
  const currentIndex = computed(() => zIndex.value + initZIndex.value)
  const nextZIndex = () => {
    zIndex.value++
    return currentIndex.value
  }
  return {
    initZIndex,
    nextZIndex,
    currentIndex
  }
}

export default useZIndex
