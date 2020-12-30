const chalk = require('chalk')
const notes = require('./notes')
const validator = require('validator')

console.log(notes.getNotes())

let email = 'fendi@doktr.me'
console.log(`Is "${email}" a valid email?`)
console.log(validator.isEmail(email))

let message = 'Success!'
console.log(chalk.green(message))
console.log(chalk.bgGreen(message))
console.log(chalk.bold.bgYellow(message))
console.log(chalk.inverse.yellow(message))