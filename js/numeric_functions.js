function add(a, b){
  return a + b;
}

function subtract(a, b){
  return add(a, -1 * b);
}

function multiply(a, b){
  return a * b;
}

function divide(a, b){
  return a / b;
}

function mod(a, b){
  return a % b;
}

function sigmoid(value, gain){
  gain = multiply(gain, -1);
  value = multiply(value, gain);
  var denominator = 1 + Math.exp(value);
  return divide(1, denominator);
} 



