let min_price = document.querySelector('#min_price');
let max_price = document.querySelector('#max_price');
let radio_buttons = document.querySelectorAll('.type_rb');

function filter_by_cost() {
    let cards = document.querySelectorAll('.product_card');
    cards.forEach(card => {
        let elementPrice = card.querySelector('.cost_label').innerHTML.replace(/[^0-9]/g, "");
        if (+elementPrice > max_price.value || +elementPrice < min_price.value) {
            card.classList.add('hidden');
        }
        if (+elementPrice < max_price.value && +elementPrice > min_price.value) {
            card.classList.remove('hidden');
        }

    });
}

/* Слушаем изменения ценового диапазона */
max_price.addEventListener('change', function () {
    filter_by_cost();
});
min_price.addEventListener('change', function () {
    filter_by_cost();
});
/* Фильтр по категориям */
let sections = document.querySelectorAll('.prod_section');

radio_buttons.forEach(rb => {
    rb.addEventListener('change',function (){
        sections.forEach(section =>{
            if (rb.value === section.id){
                section.classList.remove('hidden');
            }
            else{
                section.classList.add('hidden');
            }
        });
    });
});
