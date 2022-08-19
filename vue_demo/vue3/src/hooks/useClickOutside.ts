import { ref, Ref, onMounted, onUnmounted } from "vue";

function useClickOutside(eventRef: Ref<null | HTMLElement>) {
  const isClickOutside = ref(false);
  const handle = (e: MouseEvent) => {
    if (eventRef.value) {
      if (eventRef.value.contains(e.target as HTMLElement)) {
        isClickOutside.value = false;
      } else {
        isClickOutside.value = true;
      }
    }
  };
  onMounted(() => {
    document.addEventListener("click", handle);
  });
  onUnmounted(() => {
    document.removeEventListener("click", handle);
  });
  return isClickOutside;
}

export default useClickOutside;
