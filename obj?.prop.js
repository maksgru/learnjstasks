let user = null;
let x = 0;

user?.sayHi(x++); // нет sayHi, поэтому до x++ вычисление не дойдет

console.log(x); // 0, значение не было увеличено на единицу