import { expect, test } from 'vitest'

test('测试是不是相等', () => {
  expect('name').toBe('name')
  expect(1 + 3).toBe(4)
  expect(1 + 9).not.toBe(1)
})

test('测试是不是true或false', () => {
  expect(1).toBeTruthy() // 真
  expect(0).toBeFalsy()
})

test('测试数字大于小于', () => {
  expect(10).toBeGreaterThan(8) // 大于
  expect(1).toBeLessThan(9)
})

test('测试对象', () => {
  expect({ name: 'zhansan' }).toEqual({ name: 'zhansan' })
})
