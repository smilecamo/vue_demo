import { load } from '/pcWeb/admin/utils/loadView.js'
load('user-create')
let phone = ''
userCreateForm.onsubmit = function (e) {
    e.preventDefault();
    fetch(`http://localhost:3000/users`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username.value,
                password: password.value,
                indrocation: indrocation.value,
                photo: phone
            })

        }
    ).then(res => res.json()).then(() => {
        location.href = `/pcWeb/admin/views/user-manage/user-list/index.html`
    })
}
phoneFile.onchange = function (e) {
    const fileRead = new FileReader()
    fileRead.readAsDataURL(e.target.files[0]);
    fileRead.onload = function (res) {
        phone = res.target.result
    }
}