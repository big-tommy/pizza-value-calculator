const x = ["pizza.png", "table.png", "icecream.png"];

randomBG = () => {
  document.body.style.backgroundImage =
    "linear-gradient(#000000be, #000000be), url(Backgrounds/" +
    x[Math.floor(Math.random() * x.length)] +
    ")";
};

randomBG();
const calculator = document.querySelector(".calculator");
const calculator1 = document.querySelector(".calculator1");
const calculator2 = document.querySelector(".calculator2");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");

plus.addEventListener("click", () => {
  calculator.style.height = "100px";
  calculator1.style.borderBottom = "1px solid rgba(211,211,211,0.2)";
  calculator2.style.opacity = 1;
});

minus.addEventListener("click", () => {
  calculator.style.height = "50px";
  calculator1.style.borderBottom = "none";
  calculator2.style.opacity = 0;
});

function pizzaSurface(r) {
  const x = parseFloat(r);
  let y = x * x * Math.PI;
  return y.toFixed(2);
}

const price = document.querySelector("#price-input");
const size = document.querySelector("#size-input");
const value = parseFloat(price.value) / pizzaSurface(size.value);
const out1 = document.querySelector("#out1");
const out2 = document.querySelector("#out2");
const currencyList = document.querySelector("#currencyList");
const unitlist = document.querySelector("#unitList");

const outputValue = () => {
  if (price.value != "" && size.value != "") {
    console.log(price.value);
    out1.innerHTML =
      value.toFixed(2) +
      currencyList.value +
      " / 1" +
      unitlist.value +
      "<sup>2</sup>";
  } else {
    out1.innerHTML = "";
  }
};

price.addEventListener("change", outputValue);

size.addEventListener("change", outputValue);
