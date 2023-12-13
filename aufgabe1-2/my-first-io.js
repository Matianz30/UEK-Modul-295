const fs = require('fs')

let readedfile = fs.readFileSync(process.argv[2])

const umbruch = readedfile.toString().split("\n")
console.log(umbruch.length-1)