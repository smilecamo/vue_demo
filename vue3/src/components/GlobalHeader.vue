<template>
  <nav
    class="navbar navbar-dark sticky-top bg-primary justify-content-between align-items-center mb-4 px-4 navbar-light"
  >
    <a class="navbar-brand" href="#">知乎专栏</a>
    <ul v-if="!user.isLoading" class="list-inline mb-0">
      <li class="list-inline-item">
        <a href="#" class="btn btn-primary">登录</a>
      </li>
      <li class="list-inline-item">
        <a href="#" class="btn btn-primary">注册</a>
      </li>
    </ul>
    <ul v-else class="list-inline mb-0">
      <li class="list-inline-item">
        <dropdown :title="`欢迎${user.name}`">
          <dropdown-item
            ><a href="#" class="dropdown-item">新疆文章</a></dropdown-item
          >
          <dropdown-item disabled
            ><a href="#" class="dropdown-item">编辑资料</a></dropdown-item
          >
          <dropdown-item
            ><a href="#" class="dropdown-item">推出登录</a></dropdown-item
          >
        </dropdown>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Dropdown from "./Dropdown.vue";
import DropdownItem from "./DropdownItem.vue";
export interface UserProps {
  isLoading: boolean;
  name?: string;
  id?: number;
}
export default defineComponent({
  components: {
    Dropdown,
    DropdownItem,
  },
  props: {
    user: {
      type: Object as PropType<UserProps>,
      required: true,
    },
  },
});
</script>

<style></style>
