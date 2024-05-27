loginMethod.onsubmit = async function (eve) {
    loginError.style.display = 'none';
    eve.preventDefault();
    let result = await fetch(`http://localhost:3000/users?username=${username.value}&password=${password.value}`).then(res => res.json())
    if (result.length > 0) {
        localStorage.setItem('token', JSON.stringify({ ...result[0], password: '***' }));
        window.location.href = `/pcWeb/admin/views/home/index.html`
    } else {
        loginError.style.display = 'block';
    }
}