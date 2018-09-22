function calc() {
  let number = document.querySelectorAll('input');
  let number1 = parseInt(number[0].value);
  let number2 = parseInt(number[1].value);
  number[2].value = number1 + number2;

  let message = document.getElementById('message');
  message.textContent = 'done!';
}

let button = document.querySelector('button');
button.addEventListener('click', calc);
