const loader = document.getElementById('loader');
const content = document.getElementById('content');
const select = document.getElementsByTagName('select');
const result = document.getElementById('result');
const source = document.getElementById('source');
loader.classList.remove('hidden');
let from = document.getElementById('from');
let to = document.getElementById('to');
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://neto-api.herokuapp.com/currency", true);
xhr.send();

function onLoad() {
  loader.classList.add('hidden');
  content.classList.remove('hidden');
  let response = xhr.responseText;
  let currency  = JSON.parse(response);
  console.log(currency.length);
  for (let i = 0; i< currency.length; i++) { 
    from.innerHTML += `<option value = ${currency[i].value}>${currency[i].code}</option>`;
    to.innerHTML += `<option value = ${currency[i].value}>${currency[i].code}</option>`;
  }
}

xhr.addEventListener("load", onLoad);

function count() {
  console.log(from.options[from.selectedIndex].value);
  let res = from.options[from.selectedIndex].value * to.options[to.selectedIndex].value * source.value;
  result.value = res.toFixed(2);
}

for (let i = 0; i < select.length; i++) {
  select[i].addEventListener('input', count);
}

source.addEventListener('input', count);