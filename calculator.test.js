const Calculator = require('./calculator');

describe('Calculator Tests', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  test('should return 0 for an empty string input', () => {
    expect(calculator.handleEmptyString("")).toBe(0);
  });

  test('should add two numbers correctly', () => {
    expect(calculator.calculate("add", 10, 5)).toBe(15);
  });

  test('should subtract two numbers correctly', () => {
    expect(calculator.calculate("subtract", 10, 5)).toBe(5);
  });

  test('should multiply two numbers correctly', () => {
    expect(calculator.calculate("multiply", 10, 5)).toBe(50);
  });

  test('should divide two numbers correctly', () => {
    expect(calculator.calculate("divide", 10, 5)).toBe(2);
  });

  test('should throw error for division by zero', () => {
    expect(() => calculator.calculate("divide", 10, 0)).toThrow("Cannot divide by zero");
  });
});
