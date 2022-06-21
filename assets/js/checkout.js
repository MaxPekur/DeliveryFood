const deliveryTypeBtn = document.querySelectorAll('.delivery-type__btn')
const deliveryTypeContent = document.querySelector('.delivery-type__content')

deliveryTypeBtn.forEach(item => {
    item.addEventListener('click', (e) => {
        if (e.target.dataset.type = "delivery") {
            console.log(e.target.dataset.type)

            renderTypeDelivery()
        } else if (e.target.dataset.type = "takeAway") {
            console.log(e.target.dataset.type)
            renderTypeTakeAway()
        }

    })
})
const renderTypeDelivery = () => {
    const deliveryWrapper = document.createElement('div')
    deliveryWrapper.classList.add('delivery-wrapper')

    deliveryTypeContent.innerHTML =''

    deliveryWrapper.innerHTML = `
        <div>Доставка</div>
        
    `

    deliveryTypeContent.append(deliveryWrapper)
}



const renderTypeTakeAway = () => {
    const deliveryWrapper = document.createElement('div')
    deliveryWrapper.classList.add('delivery-wrapper')

    deliveryTypeContent.innerHTML =''

    deliveryWrapper.innerHTML = `
        <div>Самовывоз</div>
    `

    deliveryTypeContent.append(deliveryWrapper)
}