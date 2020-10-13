

//new Date(year, month, date, hours, minutes, seconds, ms)
const date = new Date(2012, 1, 20, 3, 12);

console.log(`${date.getFullYear()}, ${date.getMonth()}, ${date.getDay()} Time ${date.getHours()} : ${date.getMinutes()}`);



const time = new Date();
console.log(`${time.getHours()} : ${time.getMinutes()}`);