import { reactive } from "vue";
// 自定义指令绑到谁 el就是谁  bindings是传入的数据
function mounted(el, bindings) {
    bindEvent(el)
    // 获取所有的带有weekday的tr,可选范围
    el.allRows = getAllRows(el)
    // 最终的数据
    el.targetNodes = new Set()
    el.weekdayTimeDate = bindings.value
}
function getAllRows(el) {
    const oAllRows = el.querySelectorAll("tr")
    return [...oAllRows].reduce((prev, tr) => {
        if (tr.dataset.weekday) {
            prev.push(tr)
        }
        return prev
    }, [])
}
// table 绑定事件 mousedown 事件在定点设备（如鼠标或触摸板）按钮在元素内按下时，会在该元素上触发。 mouseup 事件与 mousedown 事件相对应。
function bindEvent(el) {
    el.addEventListener('mousedown', handleMouseDown, false)
}
// table 下的 td 绑定事件 
function handleMouseDown(e) {
    const target = e.target
    const targetName = target.tagName
    const el = this
    clearTargetNode(el)
    // 只有targetName是TD的时候才触发
    if (targetName == 'TD') {
        el.start = target
        addTargetNode(el, target)
        // 坐标以 weekday 和 time 设为 x,y
        const rowIndex = el.start.parentNode.dataset.weekday; // 获取起始位置的坐标 当前元素的父级元素的weekday
        const columnIndex = el.start.dataset.time;// 获取起始位置的坐标 当前元素的time属性
        setWeekDayTime(el, rowIndex, columnIndex)
        // mousemove 事件在定点设备（通常指鼠标）的光标在元素内移动时，会在该元素上触发。
        el.addEventListener('mousemove', handleMouseMove, false)
        // mousedown 事件在定点设备（如鼠标或触摸板）按钮在元素内释放时，在该元素上触发。
        el.addEventListener('mouseup', handleMouseUp, false)
    }
}
// 鼠标移动绑定
function handleMouseMove(e) {
    const tar = e.target
    const targetName = tar.nodeName
    const el = this
    // 当前移动的元素为TD 的话 记录当前的开始和结束坐标
    if (targetName == 'TD') {
        const startTarget = el.start
        const endTarget = tar
        const startRow = Number(startTarget.parentNode.dataset.weekday) // 开始的行
        const startColumn = Number(startTarget.dataset.time) // 开始的列
        const endRow = Number(endTarget.parentNode.dataset.weekday) // 结束的行
        const endColumn = Number(endTarget.dataset.time) // 结束的列
        // 根据坐标获取节点
        const currentTargetNodes = getTargetNodes(el, startRow, startColumn, endRow, endColumn)
        getTargetNodeDiff(el, el.targetNodes, currentTargetNodes)
    }
}
// 对比元素添加元素
function getTargetNodeDiff(el, targetNodes, currentTargetNodes) {
    // 当前滑动选中的元素有，而存储的里面没有 就添加
    currentTargetNodes.forEach(td => {
        !targetNodes.has(td) && addTargetNode(el, td)
    })
    // 当前存储的里面没有 而滑动选中的元素没有，就删除
    targetNodes.forEach(td => {
        !currentTargetNodes.has(td) && removeTargetNode(el, td)
    })
}

// 根据元素和坐标结合获取选中的元素并给加颜色
function getTargetNodes(el, startRow, startColumn, endRow, endColumn) {
    const { allRows } = el
    // 如果按下移动往上移动，最终位置是最开始的位置
    const startR = startRow > endRow ? endRow : startRow
    const startC = startColumn > endColumn ? endColumn : startColumn
    // 如果按下移动往下移动，还是最终的
    const endR = startRow > endRow ? startRow : endRow
    const endC = startColumn > endColumn ? startColumn : endColumn

    // 获取选中的节点
    const targetNodes = new Set() // set 值唯一不重复

    allRows.forEach((tr, rowIndex) => {
        // 列中 开始的列 大于等于索引 结束的列 小于等于索引
        if (rowIndex >= startR && rowIndex <= endR) {
            // 行中 开始的行 大于等于索引 结束的行 小于等于索引
            [...tr.querySelectorAll('td')].forEach((td, columnIndex) => {
                if (columnIndex >= startC && columnIndex <= endC) {
                    targetNodes.add(td)
                    setWeekDayTime(el, rowIndex, columnIndex)
                }
            })
        }
    })
    return targetNodes
}
// 添加类和元素
function addTargetNode(el, target) {
    el.targetNodes.add(target)
    target.classList.add('target')
}
function removeTargetNode(el, target) {
    el.targetNodes.delete(target)
    target.classList.remove('target')
}
function clearTargetNode(el) {
    el.targetNodes.forEach(target => {
        target.classList.remove('target')
    })
    el.targetNodes = new Set()
    el.weekdayTimeDate = reactive([])
}
function setWeekDayTime(el, weekday, time) {
    el.weekdayTimeDate[weekday] ? el.weekdayTimeDate[weekday].add(+time) : el.weekdayTimeDate[weekday] = new Set([+time])
    console.log(el.weekdayTimeDate);
}
// 鼠标取消移动绑定事件 鼠标抬起 取消事件监听
function handleMouseUp(e) {
    const el = this
    el.removeEventListener('mousemove', handleMouseMove, false)
    el.removeEventListener('mouseup', handleMouseUp, false)
}
export default { mounted }