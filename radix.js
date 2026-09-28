function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;

  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;

  for (let num of nums) {
    maxDigits = Math.max(maxDigits, digitCount(num));
  }

  return maxDigits;
}

function radixSort(nums) {
  let result = [...nums];
  const maxDigitCount = mostDigits(result);

  for (let k = 0; k < maxDigitCount; k++) {
    const buckets = Array.from({ length: 10 }, () => []);

    for (let num of result) {
      const digit = getDigit(num, k);
      buckets[digit].push(num);
    }

    result = [].concat(...buckets);
  }

  return result;
}

module.exports = {
  getDigit,
  digitCount,
  mostDigits,
  radixSort
};