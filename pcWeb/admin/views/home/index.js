import { load, user } from '/pcWeb/admin/utils/loadView.js'
load('home')
const userInfo = JSON.parse(user())
document.querySelector('.user-info').innerHTML = `
    <img src="${userInfo.photo}" alt="user" style="width:120px;height:120px;marginRight:20px"/>
    <div>
        <div>${userInfo.username}</div>
        <div><pre>${userInfo.indrocation || '该用户很懒'}</pre></div>
    </div>
`