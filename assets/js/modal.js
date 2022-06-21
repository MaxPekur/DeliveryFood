
const modalOverlay = document.querySelector('.modal-overlay')
const modal = document.querySelector('.modal')
const goods = JSON.parse(localStorage.getItem('goods')) ? JSON.parse(localStorage.getItem('goods')) :[]

const modalOpen = (goods) => {
    modalOverlay.classList.add('is-open')
    document.body.classList.add('overflow')
}
const modalClose = () => {
    modalOverlay.innerHTML = ""
    modalOverlay.classList.remove('is-open')
    document.body.classList.remove('overflow')
}
const modalDestroy = () => {
    modalOverlay.remove()
}

const productGrid = document.querySelector('.product-grid')

if (productGrid) {
    productGrid.addEventListener('click', (e) => {
        if (e.target.closest('.product-image')) {
            const productId = e.target.closest('.product-card')
            const goodId = productId.dataset.id

            renderModalProductCart(goodId)
            modalOpen()
        }
    })
}

const renderModalProductCart = (goodId) => {
    const modal = document.createElement('div')
    modal.classList.add('modal')
    
    modal.innerHTML = `
        <div class="modal-close" title="Закрыть">
            <i class="ri-close-line"></i>
        </div> 
        <div class="modal-content">
            <div class="arrow-down">
                <i class="ri-arrow-down-s-line"></i>
            </div>
            <div class="modal-image">
                <div class="modal-img">
                    <img class="modal-img" src="assets/images/pizza1.jpeg" alt="">
                </div>
            </div>
            <div class="modal-body product-body-modal">
                    <div class="modal-product-title">Сырная</div>
                    <div class="modal-description">Моцарелла, сыры чеддер и пармезан, соус альфредо</div>
                    <div class="pizza-size-wrapper">
                        <button class="btn-pizza-size" type="button" data-size="25">22 см</button>
                        <button class="btn-pizza-size active-size" type="button" data-size="30">30 см</button>
                    </div>
                    <section class="calories-wrapper">
                        <div class="calories-item">
                            <span class="calories-item-count">350</span>
                            <span class="calories-item-name">грамм</span>
                        </div>
                        <div class="calories-item">   
                            <span class="calories-item-count">302</span>
                            <span class="calories-item-name">ккал</span>    
                        </div>
                        <div class="calories-item"> 
                            <span class="calories-item-count">12</span>
                            <span class="calories-item-name">белков</span>   
                        </div>
                        <div class="calories-item">
                            <span class="calories-item-count">15</span>
                            <span class="calories-item-name">жиров</span>    
                        </div>  
                        <div class="calories-item">
                            <span class="calories-item-count">30</span>
                            <span class="calories-item-name">углеводов</span>
                        </div>
                    </section>
                    <section class="modifier">
                        <span class="modifier-title">Добавить в пиццу</span>
                        <div class="pizza-modifier">
                            <button type="button" class="modifier-btn" data-selected="false">
                                <i class="ri-checkbox-circle-line"></i>
                                <img class="modifie-image" src="https://dodopizza-a.akamaihd.net/static/Img/Ingredients/d18f364cbd6a43a88bfefb38abd43fa2.png">
                                <p>Сырный бортик</p>
                                <span class="money"><span class="money__value">179</span><span class="money__currency"> ₽</span></span>
                            </button>
                            <button type="button" class="modifier-btn" data-selected="false">
                                <i class="ri-checkbox-circle-line"></i>
                                <img class="modifie-image" src="https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA61B9A8D61">
                                <p>Ветчина</p>
                                <span class="money"><span class="money__value">79</span><span class="money__currency"> ₽</span></span>
                            </button>
                            <button type="button" class="modifier-btn" data-selected="false">
                                <i class="ri-checkbox-circle-line"></i>
                                <img class="modifie-image" src="https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA5B328D35A">
                                <p>Цыпленок</p>
                                <span class="money"><span class="money__value">79</span><span class="money__currency"> ₽</span></span>
                            </button>
                            <button type="button" class="modifier-btn" data-selected="false">
                                <i class="ri-checkbox-circle-line"></i>
                                <img class="modifie-image" src="https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA6B0FFC349">
                                <p>Брынза</p>
                                <span class="money"><span class="money__value">79</span><span class="money__currency"> ₽</span></span>
                            </button>
                            <button type="button" class="modifier-btn" data-selected="false">
                                <i class="ri-checkbox-circle-line"></i>
                                <img class="modifie-image" src="https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA7AC1A1D67">
                                <p>Томаты</p>
                                <span class="money"><span class="money__value">79</span><span class="money__currency"> ₽</span></span>
                            </button>
                        </div>
                    </section>
                    <div class="modal-footer">
                        <button class="button modal-btn">
                            <span>Добавить в корзину за</span>
                            <span class="span-price">299</span>
                        </button>
                    </div>
            </div>
        </div>
    `
    modalOverlay.append(modal)
    
    const arrowDown = document.querySelector('.arrow-down').addEventListener('click', modalClose)
    const modalCloseBtn = document.querySelector('.modal-close').addEventListener('click', modalClose)

    
    const btnPizzaSize = document.querySelectorAll('.btn-pizza-size')
    btnPizzaSize.forEach(item => {
        item.addEventListener('click', selectPizzaSize)
    })
    function selectPizzaSize() {
        btnPizzaSize.forEach(item => {
            item.classList.remove('active-size')
        })
        this.classList.add('active-size')
    }


    const modifierBtn = document.querySelectorAll('.modifier-btn')
    modifierBtn.forEach(item => {
        item.addEventListener('click', modifierSelected)
    })
    function modifierSelected() {
        modifierBtn.forEach(item => {
        })
        this.classList.toggle('selected')
    }
}

const renderModalLogin = () => {
    const modal = document.createElement('div')
    modal.classList.add('modal')
    modal.classList.add('login-modal')
    const loginForm = document.getElementById('loginForm')

    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-close" title="Закрыть">
                <i class="ri-close-line"></i>
            </div>
            <div class="modal-title">DOVEZUKA</div> 
            <div class="modal-subtitle">
                Подарим подарок на день рождения, сохраним адрес доставки и расскажем об акциях
            </div>
            <div class="login-form-wrapper">
                <form class="login-form" id="loginForm">
                    <input class="login-input" id="login" type="text" placeholder="+7" required max="13"/>
                    <button class="button-login" type="submit"><i class="ri-arrow-right-s-line"></i></button>
                </form>
            </div>
            <p class=""> Продолжая, вы соглашаетесь<a href="">со сбором и обработкой персональных данных и пользовательским     соглашением</a>
            </p>
        </div>
    `
    modalOverlay.append(modal)

    const inputLogin = document.getElementById('login')

    function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        var pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        var matrix = "+7 (___) ___ ____",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function(a) {
                return i < val.length ? val.charAt(i++) || def.charAt(i) : a
            });
        i = new_value.indexOf("_");
        if (i != -1) {
            i < 5 && (i = 3);
            new_value = new_value.slice(0, i)
        }
        var reg = matrix.substr(0, this.value.length).replace(/_+/g,
            function(a) {
                return "\\d{1," + a.length + "}"
            }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
        if (event.type == "blur" && this.value.length < 5)  this.value = ""
    }
    
    inputLogin.addEventListener("input", mask, false);
    inputLogin.addEventListener("focus", mask, false);
    inputLogin.addEventListener("blur", mask, false);
    inputLogin.addEventListener("keydown", mask, false)
    
}

const renderModalCallback = () => {
    const modal = document.createElement('div')
    modal.classList.add('modal')
    modal.classList.add('callback-modal')

    modal.innerHTML = `
        <div class="modal-close" title="Закрыть">
            <i class="ri-close-line"></i>
        </div> 
        <div class="arrow-down">
            <i class="ri-arrow-down-s-line"></i>
        </div>
        <div class="modal-content">
            <form class="login-form" id="loginForm">
                <input class="login-input" id="login" type="text" placeholder="Ваше имя" required />
                <input class="password-input" id="password" type="password" placeholder="Ваш телефон" required />
                <button class="button button-login" type="submit">Войти</button>
            </form>
        </div>
    `
    modalOverlay.append(modal)
    
}



