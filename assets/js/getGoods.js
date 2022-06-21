const getGoods = () => {
    const links = document.querySelectorAll('.navigation-link')

    const renderGoods = (goods) => {
        const goodsContainer = document.querySelector('.product-grid')

        goodsContainer.innerHTML = ""

        goods.forEach(good => {
            const goodBlock = document.createElement('article')
            goodBlock.classList.add('product-card')

            goodBlock.innerHTML = `
                    <div class="product-body">
                        <div class="product-badges">
                            <div class="badge-item ${good.label ? null : 'd-none'}">${good.label}</div>
                        </div>
                        <div class="product-image">
                            <a class="product-image__link">
                                <img class="product-img" src="assets/db/${good.img}" alt="${good.name}">
                            </a>
                        </div>
                        <div class="product-info">
                            <span class="product-title">${good.name}</span>
                            <span class="product-descr">${good.description}</span>
                        </div>
                    </div>
                    <div class="product-bottom">
                        <div class="product-control-price">от
                            <span class="money">
                                <span class="money-value">${good.price}</span>
                                <span class="rub">₽</span>
                            </span>
                        </div>
                        <button class="button add-to-cart" data-id="${good.id}">
                            Выбрать
                        </button>
                    </div>
                    
            `
            goodsContainer.append(goodBlock)
        })

    }
    
    const getData = (value, category) => {
        fetch('assets/db/db.json')
            .then((res) => res.json())
            .then((data) => {
                const array = category ? data.filter((item) => item[category] === value) : data

                localStorage.setItem('goods', JSON.stringify(array))
   
                renderGoods(array)

            })
    }

    links.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault()
            const linkValue = link.textContent
            const category = link.dataset.field

            getData(linkValue, category)

        })

        
    })

    if (localStorage.getItem('goods') && window.location.pathname === "/index.html") {
        renderGoods(JSON.parse(localStorage.getItem('goods')))
    }

    
    
}

getGoods ()