import { toRefs } from "vue"
const tableClick = {
    // 在绑定元素的父组件
    // 及他自己的所有子节点都挂载完成后调用
    // el, binding, vnode, prevVnode
    // el：指令绑定到的元素。这可以用于直接操作 DOM。
    // binding：一个对象，包含以下属性。value：传递给指令的值
    mounted(el, binding) {
        const {
            data,
            status,
            field,
            index,
            socket } = toRefs(binding.value)
        // 数据挂载到对象上 好取值
        tableClick.el = el
        tableClick.data = data
        tableClick.status = status
        tableClick.field = field
        tableClick.index = index
        tableClick.socket = socket
        console.log(tableClick);
        bindEvent()
    }
}
// 绑定事件
function bindEvent() {
    // 绑定点击table事件
    tableClick.el.addEventListener('click', handleTableClick, false)
    window.addEventListener('click', handleWindowClick, false)
}
function handleWindowClick(e) {
    if (tableClick.oInput) {
        removeInput()
    }
}
// 目标元素点击，变更为可编辑状态，以及输入框展示
function handleTableClick(e) {
    handleStopStopPropagation(e)
    handleWindowClick(e)
    tableClick.target = getTargetName(e)
    // 获取到点击元素
    // 判断点击元素绑定的index和 field
    // 判断field 是否存在，只有存在了才是目标元素
    const index = tableClick.target.dataset.index
    const field = tableClick.target.dataset.field
    if (field) {
        createInput(tableClick.target)
        tableClick.index.value = index;
        tableClick.field.value = field;
        // 改变编辑状态
        tableClick.socket.value.emit('changeStatus', true)
    }
}
// 创建输入框
function createInput(target) {
    const cInput = document.createElement('input')
    cInput.value = target.innerText
    cInput.style.cssText = `
      width: 100%;
        height: 100%;
        border: none;
        box-sizing: border-box;
        position: absolute;
        top: 0;
        left: 0;
    `
    target.appendChild(cInput)
    // 选中值
    cInput.select()
    // 绑定到主值
    tableClick.oInput = cInput
    bindInputEvent()
    return cInput
}
function handleStopStopPropagation(e) {
    e.stopPropagation()
}
function bindInputEvent() {
    tableClick.oInput.addEventListener('click', handleStopStopPropagation, false)
    tableClick.oInput.addEventListener('input', handleInput, false)
}
function unBindInputEvent() {
    tableClick.oInput.removeEventListener('click', handleStopStopPropagation, false)
    tableClick.oInput.removeEventListener('input', handleInput, false)
}
// 
function handleInput(e) {
    // function handleInput(el) {
    updateUserList(e.target.value);
    // }
}
function updateUserList(value) {
    tableClick.socket.value.emit('changeData', {
        field: tableClick.field.value,
        index: tableClick.index.value,
        value,
    })
}
// 外部点击取消编辑状态
function removeInput() {
    unBindInputEvent()
    tableClick.socket.value.emit('changeStatus', false)
    tableClick.oInput && tableClick.target.removeChild(tableClick.oInput)
    tableClick.oInput = null;
    tableClick.target = null;
}
// 获取到点击元素的 td
function getTargetName(e) {
    // 小写 转
    const tagName = e.target.tagName.toLowerCase()
    switch (tagName) {
        case 'span':
            // 如果i点击的是span  返回父级元素
            return e.target.parentNode
        default: return e.target
    }
}
export default tableClick