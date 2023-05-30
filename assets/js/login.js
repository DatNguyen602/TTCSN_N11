const formUserApi = 'http://localhost:3000/user'

function checkLogin() {
    getUser(handleLogin)
}
checkLogin();

function getUser(callBack) {
    fetch(formUserApi)
        .then((response) => response.json())
        .then(callBack)
}


function handleLogin(datas) {
    let username = document.querySelector('#name')
    let password = document.querySelector('#pass')
    let btnLogin = document.querySelector('#btnLogin')
    var nameInfo = document.getElementById('fname')
    var passInfo = document.getElementById('fpass')
    var currId = 0;

    username.onkeyup = () =>{
        var count= 0
        datas.forEach(data => {
            if(username.value === '' || username.value === null){
                nameInfo.innerHTML = 'Vui lòng nhập tên đăng nhập'
            } else if(username.value === data.username){
                count++;
                currId = data.id
            }
        })
        if(count==1)
            nameInfo.innerHTML = ''
        else 
            nameInfo.innerHTML = 'Tên đăng nhập chưa đúng'
    }
    password.onkeyup = () =>{
        console.log(currId)
        datas.forEach(data => {
            if(password.value === '' || password.value === null){
                passInfo.innerHTML = 'Vui lòng nhập mật khẩu'
            } else if(data.id === currId){
                if(password.value === data.password){
                    passInfo.innerHTML = ''
                }else {
                    passInfo.innerHTML = 'Mật khẩu chưa đúng'
                }
            } else {
                return
            }
        })
        
    }

    btnLogin.onclick = (e) => {
        e.preventDefault()
        datas.forEach(data => {
            console.log(data)
            e.preventDefault();
            if (data.username === username.value && data.password === password.value) {
                document.getElementById('form-1').style.display = 'none'
                document.getElementById('main').classList.remove('dn')
                document.querySelector('#modal').classList.remove('dn')
                document.querySelector('#chatbox').classList.remove('dn')
                document.getElementById('form-1').reset()
            } 
        })
    }
}

function closeLogin() {
    document.getElementById('form-1').style.display = 'none'
    document.getElementById('main').classList.remove('dn')
}

// function closeLogin() {
//     document.getElementById('log_in').style.display = 'block'
//     document.getElementById('form-1').style.display = 'none'
// }


// function startLogIn() {
//     document.getElementById('log_in').style.display = 'none'
//     document.getElementById('form-1').style.display = 'block'
// }

// /* chưa tìm được lỗi sai
// pass
function handleEyePass() {
    const ipnElement = document.querySelector('#pass')
    console.log(ipnElement)

    ipnElement.setAttribute(
        'type',
        ipnElement.getAttribute('type') === 'password' ? 'text' : 'password'
    )

    if(ipnElement.getAttribute('type') === 'password') {
        console.log('123')
        document.getElementById('block__eye').style.display = 'none'
        document.getElementById('none__eye').style.display = 'block'
    } else {
        console.log('12')
        document.getElementById('block__eye').style.display = 'block'
        document.getElementById('none__eye').style.display = 'none'
    }
}