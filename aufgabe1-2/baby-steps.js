let numberstr = process.argv
let sum = 0

for(let i = 2;numberstr.length > i;i++){
sum += Number(numberstr[i]) 
}

console.log(sum)