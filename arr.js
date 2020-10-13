"use strict";

const midValue = (arr) => {
  const length = arr.length - 1; 
  return Math.floor(length / 2);
}

let styles = ['Джаз', 'Блюз'];
console.log(styles);

styles.push('Рок-н-ролл');
console.log(styles);

styles[midValue(styles)] = 'Классика';
console.log(styles);

styles.shift();
console.log(styles);

styles.unshift('Рэп', 'Регги');
console.log(styles);
