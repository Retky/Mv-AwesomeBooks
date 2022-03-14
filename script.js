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
  });
}

displayBook()
