let from = document.getElementById('from');
let to = document.getElementById('to');
let xhr = new XMLHttpRequest();
xhr.open(
"GET", "https://neto-api.herokuapp.com/currency", true);
xhr.send();
xhr.addEventListener("load", onLoad);
function onLoad() {
  let response = xhr.responseText;
  let currency  = JSON.parse(response);
  console.log(currency.length);
  from.value = currency;
}

