let numbers = []

for (let i = 1; i<=50;i++){
    numbers.push(i)
}

let output = " "

for (let i = 0; i<50; i++){
    if (numbers[i]%3 == 0 || numbers[i]%5==0){
        output += numbers[i] + " "
    }
}

console.log(output)
