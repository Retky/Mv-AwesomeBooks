// Holds the books objects
let bookList = [];


// Add book to bookList(w- Title & Author)
function addBook(title, author) {
  const book = {
      title: title,
      author: author
  };
  bookList.push(book);
}

// Remove book objects
function removeBook(title, author) {
  bookList = bookList.filter(book => book.title !== title)
}
