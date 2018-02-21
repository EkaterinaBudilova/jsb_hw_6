const task01 = document.getElementById('task01');
const task02 = document.getElementById('task02');
const task03 = document.getElementById('task03');
const listBlock = document.getElementsByClassName('list-block');
const checkbox = document.getElementsByTagName('input');
let counter;

for (let i = 0; i < checkbox.length; i++) {
  checkbox[i].addEventListener('input', onChange);
}

task01.addEventListener('input', onChange);
console.log(task01.checked);
function onChange() {
  counter = 0;
  for (let i = 0; i < checkbox.length; i++) {
    if (checkbox[i].checked) {
      counter++;
    }
  } 
  console.log(counter);
  if (task01.checked && task02.checked && task03.checked) {
    listBlock.classList.add('complete');
  } else {
    listBlock.classList.remove('complete');
  }
  console.log('1'); 
}
