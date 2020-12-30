const yargs = require('yargs')

// Add new note
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  handler: () => {
    console.log('Adding a new note')
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

yargs.argv