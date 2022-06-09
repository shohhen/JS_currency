let elInput = document.querySelector(".amount");
let elForm = document.querySelector(".form");
let elSelect = document.querySelector(".select");
let elResult = document.querySelector(".Result");
let elSpan = document.querySelector(".cur");

elForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let elInputText = elInput.value;
  let elSelectText = elSelect.value;

  if (elSelectText == 0) {
    elSpan.textContent = "Please, choose the currency";
    elResult.textContent = elSpan.textContent;
  } else if (elSelectText == 1) {
    elSpan.textContent = "  usd";
    elResult.textContent =
      (elInputText / 11000).toFixed(3) + elSpan.textContent;
  } else if (elSelectText == 2) {
    elSpan.textContent = "  eur";
    elResult.textContent =
      (elInputText / 11800).toFixed(3) + elSpan.textContent;
  }
});
