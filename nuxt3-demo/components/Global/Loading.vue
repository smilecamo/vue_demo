<template>
  <div>
    <div v-if="pending">
      <GlobalLoadingTemplate></GlobalLoadingTemplate>
    </div>
    <div v-else-if="error" class="mt-3">
      <ClientOnly>
        <n-result
          status="500"
          title="错误"
          :description="error?.data?.data || 'error'"
        >
          <template #footer>
            <n-button @click="$router.go('/')">主页</n-button>
          </template>
        </n-result>
      </ClientOnly>
    </div>
    <div v-else>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { NResult, NButton } from "naive-ui";
const props = defineProps({
  pending: {
    type: Boolean,
    default: true,
  },
  error: {
    type: [String, Object, Symbol, Boolean],
    default: "",
  },
});
</script>
