<template>
  <div>
    <div v-if="pending">
    <slot name="loading">
      <GlobalLoadingTemplate></GlobalLoadingTemplate>
    </slot>
    </div>
    <template v-else-if="error" class="mt-3">
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
    </template>
    <template v-else-if="empty">
      <UiEmpty></UiEmpty>
    </template>
    <template v-else>
      <slot></slot>
    </template>
  </div>
</template>

<script setup>
import { NResult, NButton } from "naive-ui";
const props = defineProps({
  pending: {
    type: Boolean,
    default: true,
  },
  empty: {
    type: Boolean,
    default: false,
  },
  error: {
    type: [String, Object, Symbol, Boolean],
    default: "",
  },
});
</script>
