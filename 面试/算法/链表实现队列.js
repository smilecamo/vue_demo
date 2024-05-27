
// 数组 vs 链表
// 数组是连续存储 push很快 shift很慢
// 链表是非连续存储 add和delete很快 查找慢
// 链表实现队列比较快
// 单项链表实现队列 需要记录head和tail
// 要从tail 入列 从 head 出列 否则 出队时 tail 不好定位 需要遍历一遍 时间复杂为O(n)
// length 要时时记录 不可以遍历获取 
/**
 * 数组和链表实现队列
 * 空间复杂度为O(n)
 * add 时间复杂度 链表 O(1) 数组 O(1)
 * delete 时间复杂度 链表 O(1) 数组 O(n)
 * 数据结构选择要比算法优化更重要
 */
class Queue {
    constructor() {
        this.head = null
        this.tail = null
        this.len = 0
    }
    // 入队
    add(num) {
        const nodeLink = {
            value: num,
            next: null
        }
        // 如果没有head
        if (this.head == null) {
            this.head = nodeLink
        }
        const tail = this.tail
        // 如果有tail 
        if (tail) {
            tail.next = nodeLink
        }
        this.tail = nodeLink
        this.len++
    }
    // 出队
    dele() {
        if (this.head == null) return null
        if (this.len == 0) return null
        let head = this.head
        this.head = head.next
        this.len--
        return head.value
    }
    lens() {
        return this.len
    }
    get() {
        return this.head
    }
}
const queue = new Queue()
console.time('执行时间');
for (let i = 0; i < 10 * 10000; i++) {
    queue.add(i)
}
console.timeEnd('执行时间');
queue.dele()
console.log(queue.lens());
console.log(queue.get());