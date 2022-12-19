
let min_price = document.querySelector('#min_price');
let max_price = document.querySelector('#max_price');
max_price.addEventListener('change', function () {
    document.querySelector('#max_price').innerHTML = max_price.value;
    let cards = document.querySelectorAll('.products');
    cards.forEach(element => {
        let elementPrice = element.querySelector('.cost_label').innerHTML.replace(/[^0-9]/g, "");
        if (+elementPrice > +max_price.value) {
            element.classList.add('hidden')
        }
        if (+elementPrice < +min_price.value) {
            element.classList.remove('hidden')
        }
    });
})