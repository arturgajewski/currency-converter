let formElement = document.querySelector(".js-form");
let formFinished = document.querySelector(".form__currency__finished");
let formCurrency = document.querySelector(".js-currencyValue");
let elementDOLAR = document.querySelector(".js-dolar");
let elementEURO = document.querySelector(".js-euro");
let elementCHF = document.querySelector(".js-chf");
let elementGBP = document.querySelector(".js-gbp");
let elementPLN = document.querySelector(".js-pln");
let elementCZK = document.querySelector(".js-czk");

formElement.addEventListener("input", () => {
  let pln = +elementPLN.value;
  let usd = +elementDOLAR.value;
  let euro = +elementEURO.value;
  let gbp = +elementGBP.value;
  let chf = +elementCHF.value;
  let chk = +elementCZK.value;
  let summary = formFinished;
  let currency = formCurrency;

if (elementEURO.checked === true) {
  summary = pln / euro;
  currency = "EURO";
} else if (elementDOLAR.checked === true) {
  summary = pln / usd;
  currency = "USD (Dolarów)";
} else if (elementGBP.checked === true) {
  summary = pln / gbp;
  currency = "GBP (Funt Brytyjski)";
} else if (elementCHF.checked === true) {
  summary = pln / chf;
  currency = "CHF (Frank Szwajcarski)";
}
else if (elementCZK.checked === true) {
    summary = pln / czk;
    currency = "CZK (Korona Czeska)";
  }

  formFinished.innerText = summary.toFixed(2);
  formCurrency.innerText = (`  ${currency}`);
  
});