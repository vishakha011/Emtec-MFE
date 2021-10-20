function AddNumbers(num1, num2) {
  let sum = num1 + num2;
  return `This comes from shared module. The addition is of ${num1} an ${num2} is ${sum}`
}

module.exports = AddNumbers;