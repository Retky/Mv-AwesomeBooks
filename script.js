// Holds the books objects
let bookList = [];

// Local Storage
function toLS() {
  const toLS = JSON.stringify(bookList);
  localStorage.setItem('books', toLS);
}

if (localStorage.books) {
  const fromLS = JSON.parse(localStorage.books);
  bookList = fromLS;
}

// Add book to bookList(w- Title & Author)
function addBook(title, author) {

  const book = {
    title,
    author,
  };

  bookList.push(book);

  toLS();

}

// Remove book objects
function removeBook(title, author) {
  bookList = bookList.filter((book) => book.title !== title || book.author !== author);

  toLS();
}

// Create book card for each e in bookList
const bookSection = document.getElementById('bookList');

function clearAll() {
  const remove = bookSection.querySelectorAll('div');
  remove.forEach((book) => {
    bookSection.removeChild(book);
  });
}
function displayBook() {
  clearAll();

  bookList.forEach((book) => {
    const bDiv = document.createElement('div');
    const bTitle = document.createElement('p');
    const bAuthor = document.createElement('p');
    const bBtn = document.createElement('button');
    const bLine = document.createElement('hr');

    bTitle.innerHTML = book.title;
    bAuthor.innerHTML = book.author;
    bBtn.innerHTML = 'Remove';

    bDiv.appendChild(bTitle);
    bDiv.appendChild(bAuthor);
    bDiv.appendChild(bBtn);
    bDiv.appendChild(bLine);

    bookSection.appendChild(bDiv);

    // Remove listener
    bBtn.addEventListener('click', () => {
      bookSection.removeChild(bDiv);
      return removeBook(book.title, book.author);
    });
  });
}

displayBook();

// html Addbutton function
const newBook = document.getElementById('add');
const newBookEl = newBook.querySelectorAll('input');

newBookEl[2].addEventListener('click', () => {
  if (newBookEl[0].value !== '' && newBookEl[1].value !== '') {
    addBook(newBookEl[0].value, newBookEl[1].value);
    displayBook();
    newBookEl[0].value = '';
    newBookEl[1].value = '';
  } else if (newBookEl[0].value !== '') {
    addBook(newBookEl[0].value, 'Anonymous');
    displayBook();
    newBookEl[0].value = '';
    newBookEl[1].value = '';
  }
});



