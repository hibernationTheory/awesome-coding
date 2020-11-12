function getFinalPrice(initialPrice, discount) {
  const finalPrice = initialPrice - (initialPrice * discount) / 100;
  console.log(finalPrice);
}

const priceAfterFirstDiscount = getFinalPrice(100, 20);
const finalPrice = getFinalPrice(priceAfterFirstDiscount, 30);
