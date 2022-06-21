
    const loginForm = document.getElementById('loginForm')
    const loginBtn = document.querySelector('.login-btn')
    const outBtn = document.querySelector('.out-btn')
    const inputLogin = document.getElementById('login')
    const closeAuth = document.querySelector('.close-auth')
    const userName = document.querySelector('.user-name')


    loginBtn.addEventListener('click', () => {
        renderModalLogin()
        modalOpen() 
    })

    const login = (user) => {
        loginBtn.style.display = 'none'
        outBtn.style.display = 'flex'

        userName.style.display = 'block'
        userName.textContent = 'Гость'

        document.body.classList.remove('overflow')
    }

    const logOut = () => {
        loginBtn.style.display = 'flex'

        outBtn.style.display = 'none'
        userName.style.display = 'none'
        userName.textContent = ''

        localStorage.removeItem('user')
    }

    outBtn.addEventListener('click', () => {
        logOut()
    })


    if (localStorage.getItem('user')) {
        login(JSON.parse(localStorage.getItem('user')))
    }
