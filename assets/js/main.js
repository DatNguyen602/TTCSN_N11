(function () {
  "use strict";

  /* Search */
  const search = document.querySelector('.search')
  // var flag = 0
  search.addEventListener('click', () => {
    const input_search = document.querySelector('.input-search')
    // if(flag === 0){
    //   input_search.classList.remove('dn')
    //   flag = 1
    // } else {
    //   input_search.classList.add('dn')
    //   flag = 0
    // }
    input_search.classList.toggle('dn')
  })

  /* Search */
  const message = document.querySelector('.icon-message')
  const close = document.querySelector('.close')
  const modal = document.querySelector('#modal')
  const modalContainer = document.querySelector('.modal-container')

  message.addEventListener('click', () => {
    modal.classList.toggle('dn')
  })

  close.addEventListener('click', () => {
    modal.classList.toggle('dn')
  })

  // function removeOpen() {
  //   modal.classList.toggle('dn')
  // }

  // modal.addEventListener('click', removeOpen)

  //để không lan tỏa sự kiện ra phần tử trene
  modalContainer.onclick = function (e) {
    e.stopPropagation();
  }

  //modal 2
  const modal2 = document.querySelector('.modal-2');
  const btn_start = document.querySelector('#start-chat');
  const close_2 = document.querySelector('.modal-2-close');

  btn_start.addEventListener('click', (e) => {
    e.preventDefault();
    modal2.classList.toggle('dn')
  })

  close_2.addEventListener('click', () => {
    modal2.classList.toggle('dn')
  })

  //ell-modal
  const ell = document.querySelector('.fa-ellipsis')
  const ell_modal = document.querySelector('.ell')

  ell.addEventListener('click', () => {
    modal2.classList.add('dn')
    ell_modal.classList.toggle('dn')
  })

  //CHAT

  // message input
  const textarea = document.querySelector('.chatbox-message-input')
  const chatboxForm = document.querySelector('.chatbox-message-form')

  // textarea.addEventListener('input', function () {
  //   let line = textarea.value.split('\n').length

  //   if (textarea.rows < 6 || line < 6) {
  //     textarea.rows = line
  //   }

  //   if (textarea.rows > 1) {
  //     chatboxForm.style.alignItems = 'flex-end'
  //   } else {
  //     chatboxForm.style.alignItems = 'center'
  //   }
  // })

  // dropdown toggle
  const dropdownToggle = document.querySelector('.chatbox-message-dropdown')
  const dropdownMenu = document.querySelector('.chatbox-message-dropdown-menu')

  dropdownToggle.addEventListener('click', function () {
    dropdownMenu.classList.toggle('show')
  })

  // document.addEventListener('click', function (e) {
  //   if (!e.target.matches('.chatbox-message-dropdown, .chatbox-message-dropdown *')) {
  //     dropdownMenu.classList.remove('show')
  //   }
  // })

  // chatbox message
  const chatboxMessageWrapper = document.querySelector('.chatbox-message-content')
  const chatboxNoMessage = document.querySelector('.chatbox-message-no-message')

  chatboxForm.addEventListener('submit', function (e) {
    e.preventDefault()
    console.log(textarea.value)
    console.log(textarea.value.trim().replace(/\n/g, '<br>\n'))

    writeMessage()
    setTimeout(autoReply, 1000)
    // if (isValid(textarea.value)) {
    //   writeMessage()
    //   setTimeout(autoReply, 1000)
    // }
  })

  function addZero(num) {
    return num < 10 ? '0' + num : num
  }

  function writeMessage() {
    const today = new Date()
    console.log(today.getHours() + ':' + today.getMinutes())
    let message = `
      <div class="chatbox-message-item sent">
        <span class="chatbox-message-item-text">
          ${textarea.value.trim().replace(/\n/g, '<br>\n')}
        </span>
        <span class="chatbox-message-item-time">${addZero(today.getHours())}:${addZero(today.getMinutes())}</span>
      </div>
    `
    //insertAdjacentHTML - beforeend : sử dụng trước message content
    chatboxMessageWrapper.insertAdjacentHTML('beforeend', message)
    // chatboxForm.style.alignItems = 'center'
    // textarea.rows = 1
    textarea.focus()
    textarea.value = ''
    chatboxNoMessage.style.display = 'none'
    scrollBottom()
  }

  function autoReply() {
    const today = new Date()
    let message = `
		<div class="chatbox-message-item received">
			<span class="chatbox-message-item-text">
				Cảm ơn bạn.
			</span>
			<span class="chatbox-message-item-time">${addZero(today.getHours())}:${addZero(today.getMinutes())}</span>
		</div>
	`
    chatboxMessageWrapper.insertAdjacentHTML('beforeend', message)
    scrollBottom()
  }

  function scrollBottom() {
    //scrollTo: cuộn chuột tại vị trí đứng
    chatboxMessageWrapper.scrollTo(0, chatboxMessageWrapper.scrollHeight)
  }

  // function isValid(value) {
  //   let text = value.replace(/\n/g, '')
  //   text = text.replace(/\s/g, '')

  //   return text.length > 0
  // }

  //output ChatBox
  const chatBox = document.querySelector('#chatbox')
  const login_customer = document.getElementsByClassName('login');
  const exit = document.querySelector('.exit')
  const login_1 = document.getElementById('form-1')
  const main = document.getElementById('main')

  //logic chưa ổn
  // for(var v of login){
  //   v.addEventListener('click', () => {
  //     chatBox.classList.toggle('dn')
  //   })
  // }
  login_customer[1].addEventListener('click', () => {
    window.location.assign("./signup.html")
  })

  login_customer[0].addEventListener('click', () => {
    console.log('exit')
    login_1.style.display = 'block'
    main.classList.add('dn')
    modal.classList.add('dn')
  })

  exit.addEventListener('click', (e) => {
    e.preventDefault()
    chatBox.classList.add('dn')
  })

  //select and nav
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /* Mobile nav toggle */
  on('click', '.mobile-nav-toggle', function (e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /* Mobile nav dropdowns activate */
  on('click', '.navbar .dropdown > a', function (e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /* Preloader */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }


})()