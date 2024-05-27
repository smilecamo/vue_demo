// 获取用户
const user = () => {
    return localStorage.getItem('token')
}
// 解析数据
const renderNav = (data) => {
    const img = document.querySelector('#img')
    const currentUser = document.querySelector('#currentUser')
    const exit = document.querySelector('#exit')
    img.src = data.photo
    currentUser.innerHTML = data.username
    exit.onclick = function () {
        logout()
    }
}
// 解析数据
const renderSiderbar = (data) => {
    if (!data.role) {
        document.querySelector('.user-manage').remove();
    }
}
const logout = () => {
    localStorage.removeItem('token')
    location.href = '/pcWeb/admin/views/login/index.html'
}
// 动态加载文本文档
const load = async (id) => {
    const u = user()
    if (u) {
        // 动态加载 nav 文档片段
        await fetch('/pcWeb/admin/components/nav/index.html').then(res => res.text()).then(res => {
            document.querySelector('.header').innerHTML = res
            renderNav(JSON.parse(u))
        })
        // 动态加载 siderbar 文档片段
        await fetch('/pcWeb/admin/components/siderbar/index.html').then(res => res.text()).then(res => {
            document.querySelector('.silder').innerHTML = res
            // renderNav(JSON.parse(u))
        })
        renderSiderbar(JSON.parse(u))
        // 改变当前的silderbar
        document.querySelector('#' + id).style = "color:#0a58ca"
    } else {
        location.href = '/pcWeb/admin/views/login/index.html'
    }
}

export {
    load,
    user
}