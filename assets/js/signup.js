// //handleFormSignup
function checkName() {
    var name = document.querySelector('#fullname')
    var nameInfo = document.querySelector('.fname')
    var regexName = /^[^\d+]*[\d+]{0}[^\d+]*$/; //người dùng nhập vào mòa trung thì người dùng làm kh đúng
    if (name.value === "" || name.value === 'null') {
        nameInfo.innerHTML = 'Vui lòng nhập tên đăng nhập'
    } else if (!regexName.test(name.value)) {
        nameInfo.innerHTML = 'Tên đăng nhập chưa chưa hợp lệ'
    } else {
        if (name.value.length < 5 || name.value.length > 30) {
            nameInfo.innerHTML = 'Quá ngắn/dài. Vui lòng kiểm tra lại'
        } else {
            nameInfo.innerHTML = ''
            return name.value;
        }
    }
}

function checkEmail() {
    var email = document.getElementById('email').value
    var viewErrEmail = document.querySelector('.fmail')
    var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    var indexNameEmail = email.indexOf('@')
    //console.log(indexNameEmail)

    if (!checkName()) {
        document.querySelector('#fullname').focus()
    } else if (email === '') {
        viewErrEmail.innerHTML = 'Vui lòng nhập email.'
    } else if (indexNameEmail < 5) {
        viewErrEmail.innerHTML = 'Tên hộp thư quá ngắn.'
    } else if (!regexEmail.test(email)) {
        viewErrEmail.innerHTML = 'Chưa đúng cấu trúc hộp thư.(<strong style="font-size: 20px">abc123</strong>@gmail.com)'
    } else {
        viewErrEmail.innerHTML = ''
        return email
    }
}

function checkPass() {
    var pass = document.getElementById('password').value
    var passInfo = document.querySelector('.fpass')
    var regexPass = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
    var regexPass1 = /\ /

    if (!checkEmail()) {
        document.getElementById('email').focus()
    } else if (pass === '') {
        passInfo.innerHTML = 'Vui lòng nhập mật khẩu'
    } else if (!regexPass.test(pass)) {
        passInfo.innerHTML = 'Mật khẩu chưa hợp lệ'
    } else if (regexPass1.test(pass)) {
        passInfo.innerHTML = 'Mật khẩu không được chứ dấu cách'
    } else {
        passInfo.innerHTML = ''
        return pass
    }
}

function checkPass1() {
    var pass1 = document.getElementById('password_confirmation').value
    var passInfo1 = document.querySelector('.fpassConfirmation')
    var regexPass = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
    var regexPass1 = /\ /
    var pass = checkPass()

    if (!checkPass()) {
        document.getElementById('password').focus()
    } else if (pass1 === '') {
        passInfo1.innerHTML = 'Vui lòng nhập mật khẩu'
    } else if (!regexPass.test(pass1)) {
        passInfo1.innerHTML = 'Mật khẩu chưa hợp lệ'
    } else if (regexPass1.test(pass1)) {
        passInfo1.innerHTML = 'Mật khẩu không được chứ dấu cách'
    } else if (pass1 !== pass) {
        passInfo1.innerHTML = 'Mật khẩu chủa trùng khớp'
    } else {
        passInfo1.innerHTML = ''
        return pass
    }
}

// sign up
let apiUser = 'http://localhost:3000/user'

let form = document.querySelector('#form-1')
form.addEventListener('submit', e => {
    e.preventDefault()

    const formData = new FormData(form)
    const data = Object.fromEntries(formData)

    fetch(apiUser, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(err => console.log(err))
    
    form.reset();
    //chỉ định vị của máy chủ <BOM>
    window.location.assign("./index.html")
})


