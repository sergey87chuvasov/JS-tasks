// 1 - Задача. Условие: Найти самый маленький элемент - число в массиве

findSmallestEl = (arg) => {
  /*  

  1 - способ: Math.min() - не принимает массив => ...spread (раздел массив на эл)
    return Math.min(...arg);

  */

  // 2 - способ: лучше + for

  let currentMin = arg[0];

  // i = 1 !!!
  for (let i = 1; i < arg.length; i++) {
    if (arg[i] < currentMin) {
      currentMin = arg[i];
    }
  }

  return currentMin;
};

/* --- test
console.log(findSmallestEl([55, 77, 2, 555, 1, 9])); // 1
console.log(findSmallestEl([55, 77, 222, 555, 4, 9])); // 4
console.log(findSmallestEl([55, 77, 10, 555, 12, 19])); // 10
*/

// 2 - Задача. Условие: Найти среднее арифметическое в массиве - округленное вниз до ближайшего целого числа - Math.floor()

function getAverage(arr) {
  /* 

  // 1 - способ - reduce
  return Math.floor(arr.reduce((acc, curElem) => acc + curElem) / arr.length);

  */

  // 2 - способ:  forEach или for

  let acc = 0;
  arr.forEach((el) => {
    acc += el;
  });
  return Math.floor(acc / arr.length);
}

/* --- test
console.log(getAverage([51, 79, 2, 595, 1, 9])); // 122
console.log(getAverage([5, 77, 22, 55, 4, 9])); // 28
console.log(getAverage([55, 7, 10, 5, 1, 1])); // 13
*/

// 3 - Задача. Условие: Развернуть последовательность и вернуть массив чисел

// 1 - способ - for + push()
const reverseSeq = (n) => {
  const arr = [];

  for (let i = n; i > 0; i--) {
    arr.push(i);
  }
  return arr;
};

/*  --- test
console.log(reverseSeq(5)); // [ 5, 4, 3, 2, 1 ]
console.log(reverseSeq(3)); // [ 3, 2, 1 ]
console.log(reverseSeq(9)); // [ 9, 8, 7, 6, 5, 4, 3, 2, 1]
*/

// 4 - Задача. Условие: вывести определнные числа исходя из условия - if, else if

function finalGrade(e, p) {
  if (e > 90 || p > 10) {
    return 100;
  } else if (e > 75 && p >= 5) {
    return 90;
  } else if (e > 50 && p >= 2) {
    return 75;
  } else {
    return 0;
  }
}

/*  --- test
console.log(finalGrade(100, 12)); // 100
console.log(finalGrade(85, 5)); // 90
console.log(finalGrade(60, 3)); // 75
console.log(finalGrade(30, 1)); // 0
*/
