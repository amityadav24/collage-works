//selects nums ,  oprad , = , ac ,del and ipbox using custom data attribute and class
let numBtns = document.querySelectorAll("[data-num]");
let opradBtns = document.querySelectorAll("[data-op]");
let equalBtn = document.querySelector("[data-equal]");
let ipBox = document.querySelector(".input");
let acBtn = document.querySelector("[data-ac]");
let delBtn = document.querySelector("[data-del]");

//add event listners
for (let index = 0; index < numBtns.length; index++) {
  document
    .querySelectorAll("[data-num]")
    [index].addEventListener("click", (e) => {
      let number = e.target.innerText;

      ipBox.value += number;
    });
}

for (let index = 0; index < opradBtns.length; index++) {
  document
    .querySelectorAll("[data-op]")
    [index].addEventListener("click", (e) => {
      let op = e.target.innerText;

      ipBox.value += op;
    });
}

equalBtn.addEventListener("click", () => {
  let ans = eval(ipBox.value);
  ipBox.value = ans;
});

acBtn.addEventListener("click", () => {
  ipBox.value = "";
});

delBtn.addEventListener("click", () => {
  let value = ipBox.value.slice(0, -1);
  ipBox.value = value;
});
