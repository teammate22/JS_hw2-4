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


// дз 2 - задание 6


// дз 2 - задание 8


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

