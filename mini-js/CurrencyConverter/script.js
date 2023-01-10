// описание конвертаций - название совпад с option value
const RATES = {
  usd: 2.5,
  eur: 3.1,
  rus: 0.035,
};

const valueInputNode = document.querySelector('.js-value-input');
const currencySelectorNode = document.querySelector('.js-currency-selector');
const outputNode = document.querySelector('.js-output');

function getInput() {
  return {
    byn: Number(valueInputNode.value),
    currency: currencySelectorNode.value,
  };
}

function convert({ byn, currency }) {
  if (!RATES[currency]) return null;

  return byn * RATES[currency];
}

function render(result) {
  outputNode.innerText = result.toFixed(2) + ' BYN';
}

valueInputNode.addEventListener('input', () => {
  const result = convert(getInput());
  render(result);
});

// изменение select - при переключении
currencySelectorNode.addEventListener('change', function () {
  const result = convert(getInput());
  render(result);
});
