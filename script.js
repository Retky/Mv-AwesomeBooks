// Holds the books objects
const bookList = [];


// Add book to bookList(w- Title & Author)
function addBook(title, author) {
  const book = {
      title: title,
      author: author
  };
  bookList.push(book);
}
