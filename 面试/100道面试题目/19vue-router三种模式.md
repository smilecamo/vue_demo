1. hash createWebHashHistory
2. webHistory createWebHistory
3. memoryHistory createMemoryHistory()它不会有历史记录，这意味着你无法后退或前进。因此不会与 URL 交互也不会自动触发初始导航,使得它非常适合 Node 环境和 SSR。