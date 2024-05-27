import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

// Load the route meta information from page.js files
const metaFiles = import.meta.glob('../views/**/page.js', {
  eager: true,
  import: 'default'
})

// Load the Vue component files
const componentFiles = import.meta.glob('../views/**/index.vue')

// Helper function to normalize the path
function normalizePath(filePath: string, baseDir: string, filePattern: string): string {
  return filePath.replace(baseDir, '').replace(filePattern, '') || '/'
}

// Create the routes array from the loaded meta and component files
const routes: RouteRecordRaw[] = Object.entries(metaFiles).map(([path, meta]) => {
  const normalizedPath = normalizePath(path, '../views', '/page.js')
  const name = normalizedPath.split('/').filter(Boolean).join('-') || '/'
  const componentPath = path.replace('/page.js', '/index.vue')

  // Ensure the component path exists in the componentFiles map
  if (!componentFiles[componentPath]) {
    console.warn(`Component not found for path: ${componentPath}`)
  }

  return {
    path: normalizedPath,
    name,
    component: () => componentFiles[componentPath](),
    meta
  } as RouteRecordRaw
})

// Create the Vue Router instance
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes.filter((route) => route.component !== undefined)
})

export default router
