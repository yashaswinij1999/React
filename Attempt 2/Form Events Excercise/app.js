const form = document.querySelector("form");
const product = document.querySelector("#product");
const qty = document.querySelector("#qty");
const ul = document.querySelector("#ul");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const prodVal = product.value;
  const qtyVal = qty.value;
  const li = document.createElement("li");
  list = qtyVal + " " + prodVal;
  li.innerText = list;
  ul.appendChild(li);
  product.value = "";
  qty.value = "";
});
