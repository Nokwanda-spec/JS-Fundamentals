const args = process.argv.slice(2);
const n = parseInt(args[0], 10);

function factorial(x) {
  if (isNaN(x) || x <= 1) {
    return 1;
  }
  return x * factorial(x - 1);
}

console.log(factorial(n));
