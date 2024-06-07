<template>
  <Form :model="model" :rules="rules">
    <FormItem label="姓名">
      <template #label="{ label }">
        <Button>{{ label }}</Button>
      </template>
      <Input v-model="model.name" />
    </FormItem>
    <FormItem label="密码">
      <Input v-model="model.password" type="password" />
    </FormItem>
    <div>
      <Button type="primary">Submit</Button>
      <Button>Reset</Button>
    </div>
  </Form>
  <pre>
    model:
    {{ model }}
  </pre>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import Form from './Form.vue'
import FormItem from './FormItem.vue'
import Input from '../Input/Input.vue'
import Button from '../Button/Button.vue'
const model = reactive({
  name: '',
  password: ''
})
const rules = [
  {
    name: 'name',
    required: true,
    trigger: 'blur'
  },
  {
    name: 'password',
    required: true,
    trigger: 'blur'
  }
]
</script>

<style scoped></style>
