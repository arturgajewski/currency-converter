{
  const formElement = document.querySelector(".js-form");
  const formFinished = document.querySelector(".form__finished");
  const resetButton = document.querySelector(".js-button");

  const exchangePLNtoEURO = () => {
    const formCurrency = document.querySelector(".js-currencyValue");
    const elementDOLAR = document.querySelector(".js-dolar");
    const elementEURO = document.querySelector(".js-euro");
    const elementCHF = document.querySelector(".js-chf");
    const elementGBP = document.querySelector(".js-gbp");
    const elementPLN = document.querySelector(".js-pln");
    const elementCZK = document.querySelector(".js-czk");

    pln = +elementPLN.value;
    usd = +elementDOLAR.value;
    euro = +elementEURO.value;
    gbp = +elementGBP.value;
    chf = +elementCHF.value;
    czk = +elementCZK.value;
    summary = formFinished;
    currency = formCurrency;

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
    const initReset = () => {
      formFinished.innerText = "0";
      formCurrency.innerText = "Nie wybrano";
    };
    resetButton.addEventListener("click", initReset);

    formFinished.innerText = summary.toFixed(2);
    formCurrency.innerText = `  ${currency}`;
  };
  formElement.addEventListener("input", exchangePLNtoEURO);
}

{
  const formElement = document.querySelector(".js-formPln");
  const formFinished = document.querySelector(".js-form__finishedPln");
  const resetButton = document.querySelector(".js-buttonPln");

  const exchangeCurrencyToPLN = () => {
    const formCurrency = document.querySelector(".js-currencyNamePln");
    const formCurrencyName = document.querySelector(".js-currencyName");
    const elementDOLAR = document.querySelector(".js-dolarPln");
    const elementEURO = document.querySelector(".js-euroPln");
    const elementCHF = document.querySelector(".js-chfPln");
    const elementGBP = document.querySelector(".js-gbpPln");
    const element = document.querySelector(".js-how");
    const elementCZK = document.querySelector(".js-czkPln");

    pln = +element.value;
    usd = +elementDOLAR.value;
    euro = +elementEURO.value;
    gbp = +elementGBP.value;
    chf = +elementCHF.value;
    czk = +elementCZK.value;
    summary = formFinished;
    currency = formCurrency;
    currencyNameFinish = formCurrencyName;

    if (elementEURO.checked === true) {
      summary = euro * pln;
      currency = "EURO";
      currencyNameFinish = "EURO";
    } else if (elementDOLAR.checked === true) {
      summary = usd * pln;
      currency = "USD (Dolar Amerykański)";
      currencyNameFinish = "USD (Dolar Amerykański)";
    } else if (elementGBP.checked === true) {
      summary = gbp * pln;
      currency = "GBP (Funt Brytyjski)";
      currencyNameFinish = "GBP (Funt Brytyjski)";
    } else if (elementCHF.checked === true) {
      summary = chf * pln;
      currency = "CHF (Frank Szwajcarski)";
      currencyNameFinish = "CHF (Frank Szwajcarski)";
    } else if (elementCZK.checked === true) {
      summary = czk * pln;
      currency = "CZK (Korona Czeska)";
      currencyNameFinish = "CZK (Korona Czeska)";
    }

    formFinished.innerText = summary.toFixed(2);
    formCurrency.innerText = `  ${currency}`;
    formCurrencyName.innerText = ` ${currencyNameFinish}`;

    const initresetButton = () => {
      formFinished.innerText = "0";
      formCurrencyName.innerText = "Nie wybrano";
    };
    resetButton.addEventListener("click", initresetButton);
  };
  formElement.addEventListener("input", exchangeCurrencyToPLN);
}
