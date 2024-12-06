class Calculator {

    add(a, b) {
      return a + b;
    }
  
    subtract(a, b) {
      return a - b;
    }
  
    multiply(a, b) {
      return a * b;
    }
  
    divide(a, b) {
      if (b === 0) {
        throw new Error("Cannot divide by zero");
      }
      return a / b;
    }
  
    calculate(operation, a, b) {
      switch (operation) {
        case 'add':
          return this.add(a, b);
        case 'subtract':
          return this.subtract(a, b);
        case 'multiply':
          return this.multiply(a, b);
        case 'divide':
          return this.divide(a, b);
        default:
          throw new Error(`Unknown operation: ${operation}`);
      }
    }
  
    handleEmptyString(expression) {
      if (expression.trim() === "") {
        return 0;
      }
      try {
        return eval(expression);
      } catch (e) {
        throw new Error("Invalid expression");
      }
    }
  }
  
  module.exports = Calculator;
  