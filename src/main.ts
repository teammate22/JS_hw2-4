// дз 2 - задание 2 (if/switch)
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


// дз 3 - задание 2 (while/do-while/for)


// дз 3 - задание 4


// дз 3 - задание 6


// дз 3 - задание 8


// дз 3 - задание 10


// дз 4 - задание 2 (recursion)


// дз 4 - задание 4


// дз 4 - задание 6


// дз 4 - задание 8


// дз 4 - задание 10

