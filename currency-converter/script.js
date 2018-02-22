const content = document.getElementById('content');
const select = document.getElementsByTagName('select');
const result = document.getElementById('result');
let from = document.getElementById('from');
let to = document.getElementById('to');
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://neto-api.herokuapp.com/currency", true);
xhr.send();
xhr.addEventListener("load", onLoad);
function onLoad() {
  content.classList.remove('hidden');
  let response = xhr.responseText;
  let currency  = JSON.parse(response);
  console.log(currency.length);
  for (let i = 0; i< currency.length; i++) { 
    from.innerHTML += `<option value = currency[i].value>${currency[i].code}</option>`;
    to.innerHTML += `<option value = currency[i].value>${currency[i].code}</option>`;
  }
}

function count() {
  let res = from.value * to.value;
  result.value = res;
}
for (let i = 0; i < select.length; i++) {
  select[i].addEventListener('input', count);
}
