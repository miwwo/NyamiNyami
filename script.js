
let min_price = document.querySelector('#min_price');
let max_price = document.querySelector('#max_price');
max_price.addEventListener('change', function () {
    let elementPrice = element.querySelector('.cost_label').innerHTML.replace(/[^0-9]/g, "");
    if (+elementPrice > max_range.value || +elementPrice < min_range.value) {
        element.classList.add('hidden')
    }
    if (+elementPrice < max_range.value && +elementPrice > min_range.value) {
        element.classList.remove('hidden')
    }
})
min_price.addEventListener('change', function () {
    let elementPrice = element.querySelector('.cost_label').innerHTML.replace(/[^0-9]/g, "");
    if (+elementPrice > max_range.value || +elementPrice < min_range.value) {
        element.classList.add('hidden')
    }
    if (+elementPrice < max_range.value && +elementPrice > min_range.value) {
        element.classList.remove('hidden')
    }
})