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

// Create book card for each e in bookList
const bookSection = document.getElementById('bookList');

function displayBook() {
  const bDiv = document.createElement('div');
  const bTitle = document.createElement('p');
  const bAuthor = document.createElement('p');
  const bBtn = document.createElement('button');
  const bLine = document.createElement('hr');

  bookList.forEach((book) => {
    bTitle.innerHTML = book.title;
    bAuthor.innerHTML = book.author;
    bBtn.innerHTML = 'Remove';

    bDiv.appendChild(bTitle);
    bDiv.appendChild(bAuthor);
    bDiv.appendChild(bBtn);
    bDiv.appendChild(bLine);

    // Remove listener
    bBtn.addEventListener('click', () => {
      console.log('click');
      bookSection.removeChild(bDiv);
      return removeBook(book.title);
    });
  });
  bookSection.appendChild(bDiv);
}

displayBook()

// html Addbutton fucntion
const newBook = document.getElementById('add');
const newBookEl = newBook.querySelectorAll('input');

newBookEl[2].addEventListener('click', () => {
  if (newBookEl[0].value === '' || newBookEl[1].value === '') {
    return
  }
  addBook(newBookEl[0].value, newBookEl[1].value)
  displayBook()
  newBookEl[0].value = '';
  newBookEl[1].value = '';
  console.log(bookList);
});
