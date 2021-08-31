let numbers = [22, 45, 6, 11, 64, 13, 87, 34, 12, 57]

// Only even
console.log(numbers.filter(e => e%2 == 0))

// Add 5 too each
console.log(numbers.map(e => e + 5))

// Sum all elements
console.log(numbers.reduce((a, b) => a + b, 0))