function Book (title='noTitle', author='noAuthor') {
    this._title = title
    this._author = author
}

// Create objects
let book = new Book('alice', 'carrol')
let book2 = new Book()

// Extention

Book.prototype.details = function() {
  console.log( this._title, this._author )
}

// Use extention

book.details()
book2.details()