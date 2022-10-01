let formElement = document.querySelector(".js-form");
let formFinished = document.querySelector(".form__finished");
let formCurrency = document.querySelector(".js-currencyValue");
let elementDOLAR = document.querySelector(".js-dolar");
let elementEURO = document.querySelector(".js-euro");
let elementCHF = document.querySelector(".js-chf");
let elementGBP = document.querySelector(".js-gbp");
let elementPLN = document.querySelector(".js-pln");
let elementCZK = document.querySelector(".js-czk");
let resetButton = document.querySelector(".js-button");

formElement.addEventListener("input", () => {
  let pln = +elementPLN.value;
  let usd = +elementDOLAR.value;
  let euro = +elementEURO.value;
  let gbp = +elementGBP.value;
  let chf = +elementCHF.value;
  let czk = +elementCZK.value;
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
  } else if (elementCZK.checked === true) {
    summary = pln / czk;
    currency = "CZK (Korona Czeska)";
  }

  formFinished.innerText = summary.toFixed(2);
  formCurrency.innerText = `  ${currency}`;
});

let formElementpln = document.querySelector(".js-formpln");
let formFinishedpln = document.querySelector(".js-form__finishedpln");
let formCurrencypln = document.querySelector(".js-currencyValuepln");
let formCurrencyplne = document.querySelector(".js-currencyValueplne");
let elementDOLARpln = document.querySelector(".js-dolarpln");
let elementEUROpln = document.querySelector(".js-europln");
let elementCHFpln = document.querySelector(".js-chfpln");
let elementGBPpln = document.querySelector(".js-gbppln");
let elementPln = document.querySelector(".js-how");
let elementCZKpln = document.querySelector(".js-czkpln");
let resetButtonpln = document.querySelector(".js-buttonpln");

formElementpln.addEventListener("input", () => {
  let plnpol = +elementPln.value;
  let usdpln = +elementDOLARpln.value;
  let europlnz = +elementEUROpln.value;
  let gbppln = +elementGBPpln.value;
  let chfpln = +elementCHFpln.value;
  let czkpln = +elementCZKpln.value;
  let summaryplnz = formFinishedpln;
  let currencypln = formCurrencypln;
  let currencyplne = formCurrencyplne;

  if (elementEUROpln.checked === true) {
    summaryplnz = europlnz * plnpol;
    currencypln = "EURO";
    currencyplne = "EURO";
  } else if (elementDOLARpln.checked === true) {
    summaryplnz = usdpln * plnpol;
    currencypln = "USD (Dolar Amerykański)";
    currencyplne = "USD (Dolar Amerykański)";
  } else if (elementGBPpln.checked === true) {
    summaryplnz = gbppln * plnpol;
    currencypln = "GBP (Funt Brytyjski)";
    currencyplne = "GBP (Funt Brytyjski)";
  } else if (elementCHFpln.checked === true) {
    summaryplnz = chfpln * plnpol;
    currencypln = "CHF (Frank Szwajcarski)";
    currencyplne = "CHF (Frank Szwajcarski)";
  } else if (elementCZKpln.checked === true) {
    summaryplnz = czkpln * plnpol;
    currencypln = "CZK (Korona Czeska)";
    currencyplne = "CZK (Korona Czeska)";
  }

  formFinishedpln.innerText = summaryplnz.toFixed(2);
  formCurrencypln.innerText = `  ${currencypln}`;
  formCurrencyplne.innerText = `  ${currencyplne}`;
});

resetButton.addEventListener("click", () => {
  formFinished.innerText = "N/A";
  formCurrency.innerText = "N/A";
  formFinishedpln.innerText = "N/A";
  formCurrencypln.innerText = "N/A";
  formCurrencyplne.innerText = "N/A";
});

resetButtonpln.addEventListener("click", () => {
  formFinishedpln.innerText = "N/A";
  formCurrencypln.innerText = "N/A";
  formCurrencyplne.innerText = "N/A";
});
