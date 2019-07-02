var tab=document.querySelectorAll('.shopping-item-delete');
for(i=0;i<=2;i++){
tab[i].addEventListener(
    'click',
    function(event) {
        event.target.parentNode.parentNode.remove()
    })
}
function calculatePrice(unitPrice, quantity) {
    return unitPrice * quantity}


document.querySelector('.shopping-item-quantity-increment').onclick =
    function(event) {
        let span = event.target.parentNode.querySelector('span')
        span.innerText ++
        let unitPrice = event.target.parentNode.parentNode.querySelector('.shopping-item-unit-price').innerText
        let totalSpan = event.target.parentNode.parentNode.querySelector('.shopping-item-total-price')
        console.log(totalSpan)
        totalSpan.innerText= Number(totalSpan.innerText) + Number(unitPrice)
        var s=0
        l= document.getElementsByClassName('shopping-item-total-price').length
        for(let i=0;i<l;i++){
         s=s+parseInt(document.getElementsByClassName('shopping-item-total-price')[i].innerText)
        }
        document.getElementsByClassName('cart-total-price')[0].innerText=s
    }
document.querySelector('.shopping-item-quantity-decrement').onclick =
    function(event) {
        let span = event.target.parentNode.querySelector('span')
        if(span.innerText <= 0) {
            return
        }
        span.innerText --
        let unitPrice = event.target.parentNode.parentNode.querySelector('.shopping-item-unit-price').innerText
        let totalSpan = event.target.parentNode.parentNode.querySelector('.shopping-item-total-price')
        totalSpan.innerText= Number(totalSpan.innerText) - Number(unitPrice)
        var s=0
        l= document.getElementsByClassName('shopping-item-total-price').length
        for(let i=0;i<l;i++){
         s=s+parseInt(document.getElementsByClassName('shopping-item-total-price')[i].innerText)
        }
        document.getElementsByClassName('cart-total-price')[0].innerText=s
    }

document.querySelector('.shopping-item-quantity-increment1').onclick =
    function(event) {
        let span = event.target.parentNode.querySelector('span')
        span.innerText ++
        let unitPrice = event.target.parentNode.parentNode.querySelector('.shopping-item-unit-price').innerText
        let totalSpan1 = event.target.parentNode.parentNode.querySelector('.shopping-item-total-price')
        totalSpan1.innerText= Number(totalSpan1.innerText) + Number(unitPrice)
        console.log(totalSpan1)
        var s=0
        l= document.getElementsByClassName('shopping-item-total-price').length
        for(let i=0;i<l;i++){
         s=s+parseInt(document.getElementsByClassName('shopping-item-total-price')[i].innerText)
        }
        document.getElementsByClassName('cart-total-price')[0].innerText=s
    }
document.querySelector('.shopping-item-quantity-decrement1').onclick =
    function(event) {
        let span = event.target.parentNode.querySelector('span')
        if(span.innerText <= 0) {
            return
        }
        span.innerText --
        let unitPrice = event.target.parentNode.parentNode.querySelector('.shopping-item-unit-price').innerText
        let totalSpan1 = event.target.parentNode.parentNode.querySelector('.shopping-item-total-price')
        totalSpan1.innerText= Number(totalSpan1.innerText) - Number(unitPrice)
        console.log(totalSpan1)
        var s=0
        l= document.getElementsByClassName('shopping-item-total-price').length
        for(let i=0;i<l;i++){
         s=s+parseInt(document.getElementsByClassName('shopping-item-total-price')[i].innerText)
        }
        document.getElementsByClassName('cart-total-price')[0].innerText=s
    }

    document.querySelector('.shopping-item-quantity-increment2').onclick =
    function(event) {
        let span = event.target.parentNode.querySelector('span')
        span.innerText ++
        let unitPrice = event.target.parentNode.parentNode.querySelector('.shopping-item-unit-price').innerText
        let totalSpan2 = event.target.parentNode.parentNode.querySelector('.shopping-item-total-price')
        totalSpan2.innerText= Number(totalSpan2.innerText) + Number(unitPrice)
        console.log(totalSpan2)
        var s=0
        l= document.getElementsByClassName('shopping-item-total-price').length
        for(let i=0;i<l;i++){
         s=s+parseInt(document.getElementsByClassName('shopping-item-total-price')[i].innerText)
        }
        document.getElementsByClassName('cart-total-price')[0].innerText=s
    }

document.querySelector('.shopping-item-quantity-decrement2').onclick =
    function(event) {
        let span = event.target.parentNode.querySelector('span')
        if(span.innerText <= 0) {
            return
        }
        span.innerText --
        let unitPrice = event.target.parentNode.parentNode.querySelector('.shopping-item-unit-price').innerText
        let totalSpan2 = event.target.parentNode.parentNode.querySelector('.shopping-item-total-price')
        totalSpan2.innerText= Number(totalSpan2.innerText) - Number(unitPrice)
        console.log(totalSpan2) 
        var s=0
        l= document.getElementsByClassName('shopping-item-total-price').length
        for(let i=0;i<l;i++){
         s=s+parseInt(document.getElementsByClassName('shopping-item-total-price')[i].innerText)
        }
        document.getElementsByClassName('cart-total-price')[0].innerText=s
    }
    