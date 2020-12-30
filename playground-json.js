const fs = require('fs')

const fileName = 'playground-json.json'
const readFileSync = fs.readFileSync(fileName)

const jsonString = readFileSync.toString()
console.log('Before changes:')
console.log(jsonString)

const userName = 'Fendi'
const userAge = 26

let jsonData = JSON.parse(jsonString)

jsonData['name'] = userName
jsonData['age'] = userAge

const JsonDataStringify = JSON.stringify(jsonData)
fs.writeFileSync(fileName, JsonDataStringify)

console.log('After changes:')
console.log(JsonDataStringify)