
// -----------------------------IF/ SWITH-------------------------------------- //

// дз 2 - задание 2
let input1 = document.getElementById('input1')
let span1 = document.getElementById('span1')
function symbol(x:number) {
  switch(parseInt(x)){
    case 1: span1.innerText = "!";
    break;
    case 2: span1.innerText = "@";
    break;
    case 3: span1.innerText = "#";
    break;
    case 4: span1.innerText = "$";
    break;
    case 5: span1.innerText = "%";
    break;
    case 6: span1.innerText = "^";
    break;
    case 7: span1.innerText = "&";
    break;
    case 8: span1.innerText = "*";
    break;
    case 9: span1.innerText = "(";
    break;
    case 0: span1.innerText = ")";
    break;
  }
}
input1.addEventListener('input', function() {
  symbol(input1.value);
})

// дз 2 - задание 4
let input2 = document.getElementById('input2')
let span2 = document.getElementById('span2')
input2.addEventListener('input', function() {
  if((input2.value%400==0)||((input2.value%4==0)&&(input2.value%100!=0))){
  span2.innerText = "Год високосный";}
  else{
  span2.innerText = "Год не високосный";}
})

// дз 2 - задание 6
let input3 = document.getElementById('input3')
let span3 = document.getElementById('span3')
let radio1 = document.getElementById('radio1')
let radio2 = document.getElementById('radio2')
let radio3 = document.getElementById('radio3')
input3.addEventListener('input', function(){
  let currency
  if (radio1.checked) {
    currency = 'EUR';
  } else if (radio2.checked) {
    currency = 'RUB';
  } else if (radio3.checked) {
    currency = 'BTC';
  }
  if(currency=='EUR'){
    span3.innerText = input3.value*0.89
  }
  else if(currency=='RUB'){
    span3.innerText = input3.value*77.82
  }
  else if(currency=='BTC'){
    span3.innerText = input3.value*0.000034
  }
})

// дз 2 - задание 8
let input41 = document.getElementById('input4.1')
let input42 = document.getElementById('input4.2')
let span4 = document.getElementById('span4')
function circleInSquare(){
  let a = input42.value/4
  let d = input41.value/Math.PI
  if(d<=a){
    span4.innerText = 'Да, поместится'
  }
  else{
    span4.innerText = 'Не поместится'
  }
}
input41.addEventListener('input', circleInSquare)
input42.addEventListener('input', circleInSquare)

// дз 2 - задание 10
let input51 = document.getElementById('input5.1')
let input52 = document.getElementById('input5.2')
let input53 = document.getElementById('input5.3')
let span5 = document.getElementById('span5')
let btn1 = document.getElementById('btn1')
function leapYear(){
  if((input53.value%400==0)||((input53.value%4==0)&&(input53.value%100!=0))){
    return true}
    else{
    return false}
}
function nextDay(){
  if(input51.value == 31){
    span5.innerText = '1'
    return 'lastDay'
  }
   else if(input51.value == 30 && (input52.value == 4 || input52.value == 6 || input52.value == 9 || input52.value == 11)){
    span5.innerText = '1'
    return 'lastDay'
  }
  else if(input51.value == 28 && input52.value == 2 && leapYear() == false){
    span5.innerText = '1'
    return 'lastDay'
  }
  else if(input51.value == 29 && input52.value == 2){
    span5.innerText = '1'
    return 'lastDay'
  }
  else{
    span5.innerText = `${Number(input51.value) + 1}`
  }
}
function nextMonth(){
  if(input52.value == 12 && nextDay() == "lastDay"){
    span5.innerText += '.1'
    return 'lastMonth'
  }
  else if(nextDay() == "lastDay"){
    span5.innerText += `.${Number(input52.value) + 1}`
  }
  else{
    span5.innerText += `.${input52.value}`
  }
}
function nextYear(){
  if(nextMonth() == "lastMonth" && nextDay() == 'lastDay'){
    span5.innerText += `.1.${Number(input53.value) + 1}`
  }
  else{
    span5.innerText += `.${input53.value}`
  }
}
btn1.addEventListener('click', function(){
  nextDay();
  nextMonth();
  nextYear();
})

// -----------------------------WHILE/ DO WHILE/ FOR-------------------------------------- //

// дз 3 - задание 2
let input61 = document.getElementById('input6.1');
let input62 = document.getElementById('input6.2');
let span6 = document.getElementById('span6');

function maxDiv() {
  let num1 = Number(input61.value);
  let num2 = Number(input62.value);
  let i = 1;
  let max = 1;

  while (i <= num1 && i <= num2) {
    if (num1 % i === 0 && num2 % i === 0) {
      max = i;
    }
    i++;
  }

  span6.innerText = `${max}`;
}

input61.addEventListener('input', maxDiv);
input62.addEventListener('input', maxDiv);


// дз 3 - задание 4
let input7 = document.getElementById('input7');
let span7 = document.getElementById('span7');

function numbersCounter(){
  let num = input7.value
  let count = 0
  for (let i of num){
    count++
  }
  span7.innerText = `${count}`
}
input7.addEventListener('input', numbersCounter);

// дз 3 - задание 6
let input81 = document.getElementById('input8.1');
let input82 = document.getElementById('input8.2');
let input83 = document.getElementById('input8.3');
let span8 = document.getElementById('span8');
let btn2 = document.getElementById('btn2');

function calculate() {
  let num1 = Number(input81.value)
  let num2 = Number(input82.value)
  let operator = input83.value
  let result;

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
  }

  span8.innerText = `${result}`;
}

btn2.addEventListener('click', calculate);


// дз 3 - задание 8


// дз 3 - задание 10

// -----------------------------RECURSION-------------------------------------- //

// дз 4 - задание 2


// дз 4 - задание 4


// дз 4 - задание 6


// дз 4 - задание 8


// дз 4 - задание 10

