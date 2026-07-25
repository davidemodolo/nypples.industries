const MODEL_PRICES = {
  '1.60': { input: 1.60, output: 3.20 },
  '0.25': { input: 0.25, output: 0.55 },
  '1.30': { input: 1.30, output: 4.05 },
  '0.90': { input: 0.90, output: 3.70 },
  '0.30': { input: 0.30, output: 1.20 },
  '0.55': { input: 0.55, output: 3.30 },
  '0.15': { input: 0.15, output: 0.23 },
};

function initPricingCalculator() {
  const calculator = document.getElementById('pricing-calc');
  if (!calculator) return;

  const modelSelect = calculator.querySelector('.calc-model');
  const tokensInput = calculator.querySelector('.calc-tokens');
  const ratioSelect = calculator.querySelector('#calc-output-ratio');
  const tokensLabel = document.getElementById('calc-tokens-label');
  const resultValue = document.getElementById('calc-result');

  if (!modelSelect || !tokensInput || !ratioSelect || !resultValue) return;

  function update() {
    const modelKey = modelSelect.value;
    const price = MODEL_PRICES[modelKey] || { input: parseFloat(modelKey) || 0, output: 0 };
    const tokensM = parseFloat(tokensInput.value) || 0;
    const ratio = parseFloat(ratioSelect.value) || 1;

    const inputTokensM = tokensM;
    const outputTokensM = tokensM * ratio;

    const inputCost = inputTokensM * price.input;
    const outputCost = outputTokensM * price.output;
    const total = inputCost + outputCost;

    resultValue.innerHTML = `€${total.toFixed(2)}<span>/month</span>`;
    if (tokensLabel) {
      tokensLabel.textContent = tokensM >= 1 ? `${tokensM.toFixed(1)}M` : `${(tokensM * 1000).toFixed(0)}K`;
    }
  }

  modelSelect.addEventListener('change', update);
  tokensInput.addEventListener('input', update);
  ratioSelect.addEventListener('change', update);
  update();
}
