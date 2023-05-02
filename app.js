const departureRange = document.getElementById('departure-range');
const priceRange = document.getElementById('price-range');
const priceStart = document.querySelector('.start-price');
const priceEnd = document.querySelector('.end-price');
const departureStart = document.querySelector('.start-time');
const departureEnd = document.querySelector('.end-time');

priceStart.innerHTML = 12 + '$';
priceEnd.innerHTML = priceRange.value * 12 + '$';

departureStart.innerHTML = '12:00Am';
departureEnd.innerHTML = '11:59Pm';


function priceChange() {
    priceRange.value = Number(priceRange.value);
    priceEnd.innerHTML = priceRange.value * 12 + '$';
}

function timeChange() {
    const value = departureRange.value;
    const hours = Math.floor(value / 60);
    const minutes = value % 60;
    const amPm = hours >= 12 ? "Pm" : "Am";
    const displayHours = hours % 12 || 12;
    departureEnd.innerHTML = `${displayHours}:${String(minutes).padStart(2, "0")} ${amPm}`;
}

priceRange.addEventListener('input', priceChange);
departureRange.addEventListener('input', timeChange);