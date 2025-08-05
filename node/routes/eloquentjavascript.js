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

router.get("/arrayToList", (req, res) => {
  let array = req.body.array;
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = { value: array[i], rest: list };
  }
  res.json(list);
});

router.get("/listToArray", (req, res) => {
  let list = req.body.list;
  let array = [];
  while (list !== null) {
    array.push(list.value);
    list = list.rest;
  }
  res.json(array);
});

router.get("/prepend", (req, res) => {
  let list = req.body.list;
  let value = req.body.value;
  let newList = { value: value, rest: list };
  res.json(newList);
});

router.get("/nth", (req, res) => {
  let list = req.body.list;
  let n = req.body.n;
  for (let i = 0; i < n; i++) {
    list = list.rest;
  }
  res.json(list.value);
});

router.get("/nthRecursive", (req, res) => {
  let list = req.body.list;
  let n = req.body.n;
  if (n === 0) {
    res.json(list.value);
  } else {
    res.json(nthRecursive(list.rest, n - 1));
  }
});

router.get("/deepEqual", (req, res) => {
  let obj1 = req.body.obj1;
  let obj2 = req.body.obj2;
  if (obj1 === obj2) {
    res.json(true);
  } else {
    res.json(false);
  }
});

router.get("/loop", (req, res) => {
  let value = req.body.value;
  let result = [];
  for (let i = 0; i < value; i++) {
    result.push(i);
  }
  res.json(result);
});

router.get("/every", (req, res) => {
  let array = req.body.array;
  let test = req.body.test;
  let result = true;
  for (let i = 0; i < array.length; i++) {
    if (!test(array[i])) {
      result = false;
      break;
    }
  }
  res.json(result);
});

router.get("/some", (req, res) => {
  let array = req.body.array;
  let test = req.body.test;
  let result = false;
  for (let i = 0; i < array.length; i++) {
    if (test(array[i])) {
      result = true;
      break;
    }
  }
  res.json(result);
});

router.get("/flatten", (req, res) => {
  let array = req.body.array;
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result = result.concat(array[i]);
  }
  res.json(result);
});

router.get("/deepFlatten", (req, res) => {
  let array = req.body.array;
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result = result.concat(array[i]);
  }
  res.json(result);
});

router.get("/reverse", (req, res) => {
  let array = req.body.array;
  let result = [];
  for (let i = array.length - 1; i >= 0; i--) {
    result.push(array[i]);
  }
  res.json(result);
});

router.get("/reverseInPlace", (req, res) => {
  let array = req.body.array;
  for (let i = 0; i < array.length / 2; i++) {
    let temp = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = temp;
  }
  res.json(array);
});

router.get("/flatMap", (req, res) => {
  let array = req.body.array;
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result = result.concat(array[i]);
  }
  res.json(result);
});

router.get("/map", (req, res) => {
  let array = req.body.array;
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(array[i]);
  }
  res.json(result);
});

router.get("/filter", (req, res) => {
  let array = req.body.array;
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(array[i]);
  }
  res.json(result);
});

router.get("/reduce", (req, res) => {
  let array = req.body.array;
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(array[i]);
  }
  res.json(result);
});

router.get("/concat", (req, res) => {
  let array = req.body.array;
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(array[i]);
  }
  res.json(result);
});

router.get("/flat", (req, res) => {
  let array = req.body.array;
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(array[i]);
  }
  res.json(result);
});

module.exports = router;
