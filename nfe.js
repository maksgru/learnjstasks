
function sum(value) {
    let count = value;
    function func(nextValue) {
        count += nextValue;
        return func
    }
    func.toString = function() {
        return count;
    }
    return func
}

console.log( sum(1)(2) ); // 3
console.log( sum(5)(-1)(2) ); // 6
console.log( sum(6)(-1)(-2)(-3) ); // 0
console.log( sum(0)(1)(2)(3)(4)(5) ); // 15



// function sum(a) {

//     let currentSum = a;
  
//     function f(b) {
//       currentSum += b;
//       return f;
//     }
  
//     f.toString = function() {
//       return currentSum;
//     };
  
//     return f;
//   }

// alert( sum(1)(2) ); // 3
// alert( sum(5)(-1)(2) ); // 6
// alert( sum(6)(-1)(-2)(-3) ); // 0
// alert( sum(0)(1)(2)(3)(4)(5) ); // 15