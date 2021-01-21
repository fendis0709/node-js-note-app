const fs = require('fs')

getNotes = function () {
  return 'Your notes...'
}

addNote = function (title, body) {
  let notes = loadNotes()

  // If title already taken, don't add new note
  const duplicates = notes.filter(function (note) {
    return note.title === title
  })

  if (duplicates.length === 0) {
    notes.push({
      title: title,
      body: body
    })

    saveNotes(notes)

    return {
      isSuccess: true,
      data: {
        notes: notes
      }
    }
  }

  return {
    isSuccess: false,
    data: {
      notes: duplicates
    }
  }
}

removeNote = function (title) {
  let notes = loadNotes()

  const filteredNotes = notes.filter(function (note) {
    return note.title !== title
  })

  saveNotes(filteredNotes)

  let status = true
  if (notes.length == filteredNotes.length) {
    status = false
  }

  return {
    isSuccess: status,
    data: {
      notes: filteredNotes
    }
  }
}

// Membaca data dari file ke dalam array
loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    return JSON.parse(dataBuffer.toString())
  } catch (error) {
    return []
  }
}

// Menyimpan data dari array ke dalam file
saveNotes = function (notes) {
  const dataJson = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJson)
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote
}