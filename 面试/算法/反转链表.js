
// 数组 vs 链表
// 数组是连续存储 push很快 shift很慢
// 链表是非连续存储 add和delete很快 查找慢
// 链表实现队列比较快
// 单项链表实现队列 需要记录head和tail
// 要从tail 入列 从 head 出列 否则 出队时 tail 不好定位 需要遍历一遍 时间复杂为O(n)
// length 要时时记录 不可以遍历获取 
/**
 * 
 * @param {*} arr 
 * @returns 
 */
function nodeLink(arr) {
    const length = arr.length
    if (length === 0) return {}
    let curLink = {
        value: arr[length - 1]
    }
    if (length == 1) return curLink
    for (let i = length - 2; i >= 0; i--) {
        curLink = {
            value: arr[i],
            next: curLink
        }
    }
    return curLink
}


function reveseLink(nodeLink) {
    let prevlink
    let curLink
    let nextLink = nodeLink
    while (nextLink) {
        // 第一个节点
        if (curLink && !prevlink) {
            delete curLink.next
        }
        // 反转节点
        if (curLink && prevlink) {
            curLink.next = prevlink
        }
        prevlink = curLink
        curLink = nextLink
        nextLink = nextLink?.next
    }
    curLink.next = prevlink
    return curLink
}

const arr = [100, 200, 300]
const arr1 = nodeLink(arr)
console.log(arr1);
console.log(reveseLink(arr1));