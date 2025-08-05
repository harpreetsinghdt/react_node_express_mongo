const express = require("express");
const router = express.Router();

router.get("/sumOfAnArray", (req, res) => {
  let result = 0;
  let numbers = req.body.numbers;
  let step = numbers[2] || 1;

  const fnrange = (...numbers) => {
    let range = [];
    if (step > 0) {
      for (let i = numbers[0]; i <= numbers[1]; i += step) {
        range.push(i);
      }
    } else {
      for (let i = numbers[0]; i >= numbers[1]; i += step) {
        range.push(i);
      }
    }
    console.log(range);
    return range;
  };
  let range_arr = fnrange(...numbers);

  const sum = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
    }
    return sum;
  };
  result = sum(range_arr);

  res.json(result);
});

router.get("/reverseArray", (req, res) => {
  let result = [];
  let array = req.body.array;
  for (let i = array.length - 1; i >= 0; i--) {
    result.push(array[i]);
  }
  res.json(result);
});

router.get("/reverseArrayInPlace", (req, res) => {
  let array = req.body.array;
  for (let i = 0; i < array.length / 2; i++) {
    let temp = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = temp;
  }
  res.json(array);
});

module.exports = router;
