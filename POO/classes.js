class Book {
  constructor(title) {
    this._title = title
  }

  get title() {
    return this._title
  }

  set title(title) {
    this._title = title
  }
}

// 

let book = new Book('El principito')
console.log(book.title)
book.title = 'El amor en los timpos del colera'
// book.title
console.log(book.title)