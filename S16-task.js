for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}


let num = 30;

while (num >= 1) {
    if (num === 10) {
        break;
    }
    if (num % 4 === 0) {
        num--;
        continue;
    }
    console.log(num);
    num--;
}