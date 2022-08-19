function Price(strings,type,val) {
  let s1 = strings[0];
  const retailPrice = 20;
  const wholeSalePrice = 16;
  let showText;
  if (type === "retail") {
    showText = `单价是${retailPrice}`;
  } else {
    showText = `批发价是${wholeSalePrice}`;
  }
  return `${s1}${showText}`;
}

let showText = Price`您此次购买${"retail"}${"val"}`;
// console.log(showText);