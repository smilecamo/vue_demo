<template>
<div class=" bg-white header shadow-md">
  <div class="container flex justify-between items-center h-[60px] mb-2">
    <div class="header-left">
      <n-button text class="!font-bold !text-2xl">社区</n-button>
    </div>
    <UiMenu class="ml-3">
      <UiMenuItem
        v-for="item of menuList"
        :key="item.name"
        :active="menuActive(item)"
        @click="navGo(item.path)"
      >
        {{ item.name }}
      </UiMenuItem>
    </UiMenu>

    <div class="header-right">
      <n-button circle class="mr-3">
        <n-icon size="24">
          <Search></Search>
        </n-icon>
      </n-button>
      <n-dropdown trigger="hover" :options="options" @select="handleSelect">
        <n-avatar
          round
          size="small"
          src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
        />
      </n-dropdown>
    </div>
  </div>
</div>
<div class="h-[80px]"></div>
</template>

<script setup>
import { NButton, NAvatar, NDropdown, NIcon } from "naive-ui";
import { Search } from "@vicons/ionicons5";
const options = [
  {
    label: "个人中心",
    key: "center",
  },
  {
    label: "退出登录",
    key: "logout",
  },
];
const handleSelect = (value) => {
};
const menuList = [
  {
    name: "首页",
    path: "/",
  },
  {
    name: "考试",
    path: "/paper/1",
    match: [{ name: "paper-page" }],
  },
  {
    name: "拼团",
    path: "/list/group/1",
    match: [
      {
        name: "list-type-page",
        params: {
          type:"group"
        },
      },
    ],
  },
  {
    name: "秒杀",
    path: "/list/flashsale/1",
    match: [
      {
        name: "list-type-page",
        params: {
          type:"flashsale"
        },
      },
    ],
  },
  {
    name: "直播",
    path: "/list/live/1",
    match: [
      {
        name: "list-type-page",
        params: {
          type:"live"
        },
      },
    ],
  },
  {
    name: "专栏",
    path: "/list/column/1",
    match: [
      {
        name: "list-type-page",
        params: {
          type:"column"
        },
      },
    ],
  },
  {
    name: "电子书",
    path: "/list/book/1",
    match: [
      {
        name: "list-type-page",
        params: {
          type:"book"
        },
      },
    ],
  },
  {
    name: "社区",
    path: "/bbs/1",
    match: [{ name: "bbs-page" }],
  },
  {
    name: "问答",
    path: "/q",
  },
];
const route = useRoute();
function navGo(path) {
  navigateTo(path);
}
const menuActive = (data) => {
  // route.name 
  // 匹配规则 路由选择
  if (data.match) {
    // 遍历规则
    const match = data.match.findIndex((m) => {
      let res = true
      if(m.params && typeof m.params === 'object'){
        res = (Object.keys(m.params).findIndex(i=>{
            return m.params[i] == route.params[i]
        })) != -1
      }
      return m.name === route.name && res;
    });
    return match != -1;
  }
  // 没有设定的规则就直接拿路由进行匹配
  return route.path === data.path;
};
</script>

<style>
.header {
  @apply w-screen fixed top-0 bg-white ml-auto mr-auto z-60;
}
</style>
