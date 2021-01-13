const yargs = require('yargs')
const note = require('./notes')

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
    note.addNotes(argv.title, argv.body)
  }
})

// Remove existing note by 'title'
yargs.command({
  command: 'remove',
  describe: 'Remove note from given title',
  handler: () => {
    console.log('Removing the note')
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