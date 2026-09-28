function bubbleSort(arr) {
  const nums = [...arr];

  for (let i = nums.length - 1; i > 0; i--) {
    let swapped = false;

    for (let j = 0; j < i; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
        swapped = true;
      }
    }

    if (!swapped) break;
  }

  return nums;
}

module.exports = bubbleSort;