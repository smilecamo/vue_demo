// 数组转树
let arr = [
    {
        parentId: 0, id: 1, name: '1',
    },
    {
        parentId: 1, id: 2, name: '2',
    },
    {
        parentId: 1, id: 3, name: '3',
    },
    {
        parentId: 2, id: 4, name: '4',
    },
    {
        parentId: 2, id: 5, name: '5',
    },
    {
        parentId: 3, id: 6, name: '6',
    }
]
function convert(arr) {
    let root = null
    let treeIdTo = new Map()
    arr.forEach(element => {
        const { id, parentId, name } = element
        let treeNode = { id, name }
        treeIdTo.set(id, treeNode)
        let parentNode = treeIdTo.get(parentId)
        if (parentNode) {
            if (parentNode.children == null) parentNode.children = []
            parentNode.children.push(treeNode)
        }
        if (parentId == 0) root = treeNode
    });
    return root
}
// console.log(convert(arr));
// 树转数组
let obj = {
    "id": 1,
    "name": "1",
    "children": [
        {
            "id": 2,
            "name": "2",
            "children": [
                {
                    "id": 4,
                    "name": "4"
                },
                {
                    "id": 5,
                    "name": "5"
                }
            ]
        },
        {
            "id": 3,
            "name": "3",
            "children": [
                {
                    "id": 6,
                    "name": "6"
                }
            ]
        }
    ]
}

/**
 * 思路
 * 遍历树节点 广度优先
 * 将树节点转为Array Item push到数组
 * 根据父子关系 找到Array Item的parentId
 */

function convert1(root) {
    const nodeToParent = new Map()
    const arr = []
    const queue = []
    queue.unshift(root) // 根节点入队
    while (queue.length > 0) {
        const current = queue.pop() // 出队 第一次root
        if (current == null) break
        const { id, name, children = [] } = current
        //创建数组 item 并添加
        const parentNode = nodeToParent.get(current)
        const parentId = parentNode?.id || 0
        const item = { id, name, parentId }
        arr.push(item)
        children.forEach(child => {
            nodeToParent.set(child, current)
            queue.unshift(child)
        })
    }
    return arr
}
console.log(convert1(obj));