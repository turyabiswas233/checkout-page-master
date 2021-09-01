const firstQnt = document.getElementById("first_qnt");
const secondQnt = document.getElementById("second_qnt");
const total = document.getElementById("total");
let i = 1,
  j = 1;

//prices
let price1 = 54.99;
let price2 = 74.99;
let totalPrice = price1 + price2 + 19;
total.innerHTML = totalPrice;

//first item's button set
function plus_qnt1() {
  i++;
  firstQnt.innerHTML = i;
  price1 += 54.99;
  totalPrice += 54.99;
  total.innerHTML = totalPrice;
}
function min_qnt1() {
  i--;
  if (i < 1) {
    i = 1;
  } else {
    price1 -= 54.99;
    if (price1 < 54.99) {
      price1 = 54.99;
    }
    totalPrice -= 54.99;
    if (totalPrice < 148.98) {
      totalPrice = 148.98;
    }
  }
  firstQnt.innerHTML = i;
  total.innerHTML = totalPrice;
}

//second item's  button set
function plus_qnt2() {
  j++;
  secondQnt.innerHTML = j;
  price2 += 74.99;
  totalPrice += 74.99;
  total.innerHTML = totalPrice;
}
function min_qnt2() {
  j--;
  if (j < 1) {
    j = 1;
  } else {
    price2 -= 74.99;
    if (price2 < 74.99) {
      price2 = 74.99;
    }
    totalPrice -= 74.99;
    if (totalPrice < 148.98) {
      totalPrice = 148.98;
    }
  }
  secondQnt.innerHTML = j;
  total.innerHTML = totalPrice;
}
// for (let num = 0; num < 1000; num++) {
//   console.log(num);
// }
