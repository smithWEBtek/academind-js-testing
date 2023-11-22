import { extractNumbers } from './src/parser.js';
import {
  validateStringNotEmpty,
  validateNumber,
} from './src/util/validation.js';
import { add } from './src/math.js';
import { transformToNumber } from './src/util/numbers.js';

const form = document.querySelector('form');
const output = document.getElementById('result');

const getNumberInputs = () => {
  const formData = new FormData(form);
  return extractNumbers(formData);
}

const validateNumberInputs = (numberInputs) => {
  let result = '';
  try {
    const numbers = [];
    for (const numberInput of numberInputs) {
      validateStringNotEmpty(numberInput);
      const number = transformToNumber(numberInput);
      validateNumber(number);
      numbers.push(number);
    }
    result = add(numbers).toString();
  } catch (error) {
    result = error.message;
  }
  return result;
}

const createResultText = (validNumberInputs) => {
  let resultText;
  if (validNumberInputs === 'invalid') {
    resultText = 'Invalid input. You must enter valid numbers.';
  } else if (validNumberInputs !== 'no-calc') {
    resultText = 'Result: ' + validNumberInputs;
  }
  return resultText;
}

const updateResultsOutput = (resultText) => 
  output.textContent = resultText;

const formSubmitHandler = (event) => {
  event.preventDefault();
  const numberInputs = getNumberInputs()
  const validNumberInputs = validateNumberInputs(numberInputs)
  const resultText = createResultText(validNumberInputs)
  updateResultsOutput(resultText)
}

form.addEventListener('submit', formSubmitHandler);
