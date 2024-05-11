ls = [];
for (i = 1; i <= 100; i+= 1){
    ls.push(i);
}
for (let num in ls) {
    if (num % 2 === 0) {
        console.log(num)
    }
}