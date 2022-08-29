<template>
  <div class="w-full bg-white rounded px-1 flex mb-1">
    <UiTabItem v-for="item of tabs" :key="item.label" :active="type === item.value" @click="handleTab(item.value)">
      {{item.label}}
    </UiTabItem>
  </div>
</template>

<script setup>
const route = useRoute()
const tabs = [
  {
    label:'课程',
    value:'course'
  },
  {
    label:'专栏',
    value:'column'
  }
]
let type = ref("");
let keywords = ref("");
if (route.name === "user-history-page") {
  type.value = route.query.type || 'course';
} else {
  type.value = route.params.type;
  keywords.value = route.query.keywords;
}

// tab点击
const handleTab = (e) => {
  type.value = e;
  if (route.name === "user-history-page") {
    navigateTo({
      params: {
        ...route.param,
        page: 1,
      },
      query: {
        type:type.value
      },
    });
  } else {
    navigateTo({
      params: {
        ...route.param,
        page: 1,
        type: type.value,
      },
      query: {
        ...route.query,
        keywords: keywords.value,
      },
    });
  }
};
</script>

<style lang="scss" scoped>

</style>