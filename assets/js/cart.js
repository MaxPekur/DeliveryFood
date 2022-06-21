const cart = () => {
    const cartArray = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
    const basket = document.querySelectorAll('.basket')
    const goodsContainer = document.querySelector('.product-grid')
    const modalForm = document.querySelector('.modal-form')
    const modalOverlay = document.querySelector('.modal-overlay')


        const deleteCartItem = (id) => {
        const cart = JSON.parse(localStorage.getItem('cart'))
        const newCart = cart.filter(good => {
            return good.id !== id
        })
        localStorage.setItem('cart', JSON.stringify(newCart))
        renderCartGoods(JSON.parse(localStorage.getItem('cart')))
        }

        const plusCartItem = (id) => {
        const cart = JSON.parse(localStorage.getItem('cart'))
        const goodCount = document.querySelector('.good-count')

        const newCart = cart.map(good => {
            if (good.id === id) {
                good.count++
            }
            return good
        })
        localStorage.setItem('cart', JSON.stringify(newCart))
        renderCartGoods(JSON.parse(localStorage.getItem('cart')))
        }

        const minusCartItem = (id) => {
        const cart = JSON.parse(localStorage.getItem('cart'))
        const newCart = cart.map(good => {
            if (good.id === id) {
                if (good.count > 1) {
                    good.count--
                } 
            }
            return good
        })
        localStorage.setItem('cart', JSON.stringify(newCart))
        renderCartGoods(JSON.parse(localStorage.getItem('cart')))
        }

    const addToCart = (id) => {
        const goods = JSON.parse(localStorage.getItem('goods'))
        const clickedGood = goods.find(good => good.id === id)
        const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []

        if (cart.some(good => good.id === clickedGood.id)) {
            cart.map(good => {
                if (good.id === clickedGood.id) {
                    good.count++
                }
                return good
            })
        } else {
            clickedGood.count = 1
            cart.push(clickedGood)
        }

        localStorage.setItem('cart', JSON.stringify(cart))
    } 

    const renderModalCart = () => {
        const modal = document.createElement('div')
        modal.classList.add('modal')
        modal.classList.add('modal-cart')

        modal.innerHTML = ''

        modal.innerHTML = `
            <div class="modal-close" title="Закрыть">
                <i class="ri-close-line"></i>
            </div>
            <div class="modal-content">
                <div class="modal-body">
                <div class="arrow-down">
                    <i class="ri-arrow-down-s-line"></i>
                </div>
                    <h2 class="modal-title">Корзина</h2>
                    <div class="promo">
                        <input class="promo-code" id="promoCode" type="text" placeholder="Промокод"> 
                        <button class="button button-promo-code" type="submit">Применить</button>
                    </div>
                    <div class="cart-item-wrapper"></div>
                    <section class="section-dop">
                        <h2 class="section-title">Дополнительно</h2>
                        <div class="dop-wrapper">
                            <div class="dop-item">
                                <div class="dop-item-image">
                                    <img class="cart-img" src="assets/db/img/soyevyysousN.jpeg" alt="">
                                </div> 
                                <div class="dop-body">
                                    <div class="dop-title">Соевый соус</div>
                                    <div class="dop-descr">30г</div>
                                </div>
                                <div class="good-counter-btn dop-counter">
                                    <button class="btn-counter cart-btn-minus"">-</button>
                                    <span class="good-count">1</span>
                                    <button class="btn-counter cart-btn-plus"">+</button>
                                </div>
                                <span class="dop-price">Бесплатно</span>
                            </div>
                            <div class="dop-item">
                                <div class="dop-item-image">
                                    <img class="cart-img" src="assets/db/img/imbirN.jpeg" alt="">
                                </div> 
                                <div class="dop-body">
                                    <div class="dop-title">Имбирь</div>
                                    <div class="dop-descr">10г</div>
                                </div>
                                <div class="good-counter-btn dop-counter">
                                    <button class="btn-counter cart-btn-minus"">-</button>
                                    <span class="good-count">1</span>
                                    <button class="btn-counter cart-btn-plus"">+</button>
                                </div>
                                <span class="dop-price">Бесплатно</span>
                            </div>
                            <div class="dop-item">
                                <div class="dop-item-image">
                                    <img class="cart-img" src="assets/db/img/vasabiN.jpeg" alt="">
                                </div> 
                                <div class="dop-body">
                                    <div class="dop-title">Васаби</div>
                                    <div class="dop-descr">5г</div>   
                                </div>
                                <div class="good-counter-btn dop-counter">
                                    <button class="btn-counter cart-btn-minus"">-</button>
                                    <span class="good-count">1</span>
                                    <button class="btn-counter cart-btn-plus"">+</button>
                                </div>
                                <span class="dop-price">Бесплатно</span>
                            </div>
                        </div>
                    </section>
                    <section class="upsale">
                        <h2 class="section-title">Попробуйте</h2>
                        <div class="upsale-wrapper">
                            <div class="upsale-item">
                                <div class="upsale-imege">
                                    <img class="upsale-img" src="assets/db/img/vasabiN.jpeg" alt="">
                                </div>
                                <div class="upsale-body">
                                    <div class="upsale-title">Васаби</div>
                                    <button class="button upsale-btn">329

                                    </button>
                                </div>
                            </div>
                            <div class="upsale-item">
                                <div class="upsale-imege">
                                    <img class="upsale-img" src="assets/db/img/vasabiN.jpeg" alt="">
                                </div>
                                <div class="upsale-body">
                                    <div class="upsale-title">Васаби</div>
                                    <button class="button upsale-btn">329

                                    </button>
                                </div>
                            </div>
                            <div class="upsale-item">
                                <div class="upsale-imege">
                                    <img class="upsale-img" src="assets/db/img/vasabiN.jpeg" alt="">
                                </div>
                                <div class="upsale-body">
                                    <div class="upsale-title">Васаби</div>
                                    <button class="button upsale-btn">329

                                    </button>
                                </div>
                            </div>
                            <div class="upsale-item">
                                <div class="upsale-imege">
                                    <img class="upsale-img" src="assets/db/img/vasabiN.jpeg" alt="">
                                </div>
                                <div class="upsale-body">
                                    <div class="upsale-title">Васаби</div>
                                    <button class="button upsale-btn">329

                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div class="modal-footer">
                        <a class="button modal-btn" href="/checkout.html">
                            <span>Оформить</span>
                            <span class="span-price">1399</span>
                            
                        </a>
                    </div>
                </div>
            </div>
        `
        modalOverlay.append(modal)

        const arrowDown = document.querySelector('.arrow-down').addEventListener('click', modalClose)
        const modalCloseBtn = document.querySelector('.modal-close').addEventListener('click', modalClose)

    }

    const renderCartGoods = (goods) => {

        const cartItemWrapper = document.querySelector('.cart-item-wrapper')
        cartItemWrapper.innerHTML = ''

        goods.forEach(good => {

            const cartItem = document.createElement('div')
            cartItem.classList.add('cart-item')

            cartItem.innerHTML = `
                    <div class="cart-image">
                        <img class="cart-img" src="assets/db/${good.img}" alt="">
                    </div>
                    <div class="cart-body">
                        <span class="cart-good-name">${good.name}</span>
                        <div class="cart-quantity">
                            <span class="cart-good-price">${+good.price * +good.count}</span>
                                <div class="good-counter-btn">
                                    <button class="btn-counter cart-btn-minus"">-</button>
                                    <span class="good-count">${good.count}</span>
                                    <button class="btn-counter cart-btn-plus"">+</button>
                                </div>
                        </div>
                    </div>
            `
            cartItemWrapper.append(cartItem)


            cartItem.addEventListener('click', (e) => {
                if (e.target.classList.contains('cart-btn-minus')) {
                    minusCartItem(good.id)
                } else if (e.target.classList.contains('cart-btn-plus')) {
                    plusCartItem(good.id)
                } else if (e.target.classList.contains('cart-btn-delete')) {
                    deleteCartItem(good.id)
                } 
            })
        });
    }
    basket.forEach(item => {
        item.addEventListener('click', function() {
            const cartArray = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
    
            modalOpen()
            renderModalCart()
            renderCartGoods(cartArray)
        })
    })
   

    // closeBtn.addEventListener('click', function() {
    //     cart.style.display = ''
    // })


    const sendForm = () => {
        const cartArray = localStorage.getItem('cart') ?
                JSON.parse(localStorage.getItem('cart')) : []

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                cart: cartArray,
                name: '',
                phone: ''
            })
        }).then(() => {
            cart.style.display = ''
        })
    }

    // modalForm.addEventListener('submit', (e) => {
    //     e.preventDefault()
    //     sendForm()
    // })

    if (goodsContainer) {
        goodsContainer.addEventListener('click', (event) => {
            if (event.target.closest('.add-to-cart')) {
                const buttonToCart = event.target.closest('.add-to-cart')
                const goodId = buttonToCart.dataset.id
                
                addToCart(goodId)
            }
        })
        
    }
}

cart ()