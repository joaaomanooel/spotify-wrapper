const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const mult = (a, b) => a * b;
const div = (a, b) => (a === 0 || b === 0 ? 'Can not divide by zero!' : a / b);

export { sum, sub, mult, div };
