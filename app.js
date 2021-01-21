const { argv } = require('yargs')
const chalk = require('chalk')
const note = require('./notes')
const yargs = require('yargs')
const notes = require('./notes')

let showNotes = function (notes) {
  let number = 1;
  notes.forEach(function (note) {
    console.log(`${number}. Title: ${note.title}`)
    console.log(`   Body: ${note.body}`)
    number++
  })
}

// Add new note
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note content',
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv) => {
    const data = note.addNote(argv.title, argv.body)

    if (data.isSuccess) {
      console.log(chalk.bgGreen('Note added successfully!'))
    } else {
      console.log(chalk.bgRedBright('Note already taken!'))
    }

    showNotes(data.data.notes)
  }
})

// Remove existing note by 'title'
yargs.command({
  command: 'remove',
  describe: 'Remove note from given title',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv) => {
    const data = note.removeNote(argv.title)

    if (data.isSuccess) {
      console.log(chalk.bgGreen('Note removed successfully!'))
    } else {
      console.log(chalk.bgRedBright('No note found!'))
    }

    showNotes(data.data.notes)
  }
})

// List existing note
yargs.command({
  command: 'list',
  describe: 'Listing note',
  handler: () => {
    console.log('Listing notes')
  }
})

// Read note by 'title'
yargs.command({
  command: 'read',
  describe: 'Read note by given title',
  handler: () => {
    console.log('Reading note')
  }
})

yargs.parse()
