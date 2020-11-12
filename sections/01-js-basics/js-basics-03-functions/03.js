function getFinalPrice(initialPrice, discount) {
  const finalPrice = initialPrice - (initialPrice * discount) / 100;
  console.log(finalPrice);
}

getFinalPrice(100, 20);
getFinalPrice(50, 20);
getFinalPrice(200, 60);
