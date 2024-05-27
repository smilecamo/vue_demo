import Message from './index.vue'
import {
    h, render
} from 'vue'
const message = ({
    text, duration = 3000
}) => {
    const closeMessage = () => {
        // 3. 删除render
        render(null, document.body)
    }
    // 1. 拿到vnode
    const vnode = h(Message, {
        text,
        duration,
        close: closeMessage
    })
    // 2. render vnode 
    render(vnode, document.body)
}

export default message