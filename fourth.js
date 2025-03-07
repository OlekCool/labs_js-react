// 4 lab
const restorantData = {
  menu: [
    {
      name: "Salad Caesar",
      price: "14$",
    },
    {
      name: "Pizza Diavola",
      price: "9$",
    },
    {
      name: "Beefsteak",
      price: "17$",
    },
    {
      name: "Napoleon",
      price: "7$",
    },
  ],
  waitors: [
    { name: "Alice", age: 22 },
    { name: "John", age: 24 },
  ],
  averageLunchPrice: "20$",
  openNow: true,
};

//1
function isOpen(prop) {
  let answer = "";
  prop.openNow ? (answer = "Відчинено") : (answer = "Зачинено");

  return answer;
}

console.log(isOpen(restorantData));

//2
function isAverageLunchPriceTrue(fDish, sDish, average) {
  if (parseInt(fDish.price.slice(0, -1)) + parseInt(sDish.price.slice(0, -1)) < average.slice(0, -1)) {
    return "Ціна нижче середньої";
  } else {
    return "Ціна вище середньої";
  }
}

console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

//3
function transferWaitors(data) {
  const copy = JSON.parse(JSON.stringify(data));

  copy.waitors[0] = { name: "Mike", age: 32 };
  return copy;
}

console.log(transferWaitors(restorantData));
console.log(restorantData);
