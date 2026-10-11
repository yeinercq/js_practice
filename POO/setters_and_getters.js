function Book(title) {
  // Properties
  this._title = title

  // Methods
  this.getTitle = function() {
    return this._title
  }

  this.setTitle = function (title) {
    this._title = title
  }
}

let book = new Book("El principito")

console.log( book.getTitle() )