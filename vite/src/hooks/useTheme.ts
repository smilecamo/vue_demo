import { ref, toRef } from 'vue'
export type themeType = 'dark' | 'light'
export const theme = ref<themeType>('light')
export const changeTheme = () => {
  console.log(1)
  theme.value = theme.value == 'dark' ? 'light' : 'dark'
}
