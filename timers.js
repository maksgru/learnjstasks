function printNumbersInterval(from, to) {
    let value = from;
    let timer = setInterval(() => {
        console.log(value);
        if (value == to) clearInterval(timer);
        value++;
    }, 1000)
}

function printNumbersTimeout(from, to) {
    
}

// printNumbersinterval(1, 7)