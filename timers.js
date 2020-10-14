function printNumbersInterval(from, to) {
    let value = from;
    let timer = setInterval(() => {
        console.log(value);
        if (value == to) clearInterval(timer);
        value++;
    }, 1000)
}



function printNumbersTimeout(from, to) {
    let value = from;
    setTimeout(function tick() {
        console.log(value);
        if (value < to) {
            setTimeout(tick, 1000)
        }
        value++
    }, 1000);    
}



// printNumbersinterval(1, 7)

printNumbersTimeout(2, 6)