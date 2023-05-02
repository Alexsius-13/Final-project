
const priceRange = document.getElementById('price-range');
const priceStart = document.querySelector('.start-price');
const priceEnd = document.querySelector('.end-price');
priceStart.innerHTML = 12 + '$';
priceEnd.innerHTML = priceRange.value * 12 + '$';
function priceChange() {
    priceRange.value = Number(priceRange.value);
    priceEnd.innerHTML = priceRange.value * 12 + '$';
}
priceRange.addEventListener('input', priceChange);
