let fs = require('fs')  
let contents = fs.readFileSync(process.argv[2])  
let linhas = contents.toString().split('\n').length - 1  

console.log(linhas)