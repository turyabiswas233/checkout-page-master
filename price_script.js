const firstQnt = document.getElementById("first_qnt");
const secondQnt = document.getElementById("second_qnt");
const total = document.getElementById("total");
let i = 1,
  j = 1;

//prices
let price1 = 54.99*100;
let price2 = 74.99*100;
const firstPrc = 5499;
const secondPrc = 7499;
let totalPrice = price1 + price2 + 19*100;
total.innerHTML = totalPrice/100;

//first item's button set
function plus_qnt1() {
  i++;
  firstQnt.innerHTML = i;
  price1 += firstPrc;
  totalPrice += firstPrc;
  total.innerHTML = totalPrice/100;
}
function min_qnt1() {
  i--;
  if (i < 1) {
    i = 1;
  } else {
    price1 -= firstPrc;
    if (price1 < firstPrc) {
      price1 = firstPrc;
    }
    totalPrice -= firstPrc;
    if (totalPrice < 148.98) {
      totalPrice = 148.98;
    }
  }
  firstQnt.innerHTML = i;
  total.innerHTML = totalPrice/100;
}

//second item's  button set
function plus_qnt2() {
  j++;
  secondQnt.innerHTML = j;
  price2 += secondPrc;
  totalPrice += secondPrc;
  total.innerHTML = totalPrice/100;
}
function min_qnt2() {
  j--;
  if (j < 1) {
    j = 1;
  } else {
    price2 -= secondPrc;
    if (price2 < secondPrc) {
      price2 = secondPrc;
    }
    totalPrice -= secondPrc;
    if (totalPrice < 148.98) {
      totalPrice = 148.98;
    }
  }
  secondQnt.innerHTML = j;
  total.innerHTML = totalPrice/100;
}
// for (let num = 0; num < 1000; num++) {
//   console.log(num);
// }
