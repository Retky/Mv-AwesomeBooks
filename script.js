// // Navigation
// const navlist = document.querySelectorAll('.navlink');
// const section = document.querySelectorAll('.section');

// // Holds the books objects
// class Books {
//   constructor() {
//     this.list = [];
//   }

//   // Local Storage
//   toLS() {
//     const toLS = JSON.stringify(this.list);
//     localStorage.setItem('books', toLS);
//   }

//   // Add book to bookList(w- Title & Author)
//   add(title, author) {
//     const book = {
//       title,
//       author,
//     };

//     this.list.push(book);
//     this.toLS();

//     section[1].style.display = 'none';
//     section[0].style.display = 'block';
//   }

//   // Remove book objects
//   remove(title, author) {
//     this.list = this.list.filter((book) => book.title !== title || book.author !== author);
//     this.toLS();
//   }
// }

// const bookList = new Books();

// if (localStorage.books) {
//   const fromLS = JSON.parse(localStorage.books);
//   bookList.list = fromLS;
// }

// // Create book card for each e in bookList
// const bookSection = document.getElementById('bookList');

function clearAll() {
  const remove = bookSection.querySelectorAll('.book');
  remove.forEach((book) => {
    bookSection.removeChild(book);
  });
}

function displayBook() {
  clearAll();

  let count = 1;

  bookList.list.forEach((book) => {
    const bDiv = document.createElement('div');
    const nameDiv = document.createElement('div');
    const bTitle = document.createElement('p');
    const bAuthor = document.createElement('small');
    const bBtn = document.createElement('button');

    bDiv.classList.add('book');
    bTitle.innerHTML = book.title;
    bAuthor.innerHTML = book.author;
    bBtn.innerHTML = 'Remove';

    // Background flipflop
    count += 1;
    if (count % 2 !== 0) {
      bDiv.classList.add('gray');
      count = 1;
    }

    nameDiv.appendChild(bTitle);
    nameDiv.appendChild(bAuthor);
    bDiv.appendChild(nameDiv);
    bDiv.appendChild(bBtn);

    bookSection.appendChild(bDiv);

    // Remove listener
    bBtn.addEventListener('click', () => {
      bookSection.removeChild(bDiv);
      return bookList.remove(book.title, book.author);
    });
  });
}

displayBook();

// html Addbutton function
const newBook = document.getElementById('add');
const newBookEl = newBook.querySelectorAll('input');

newBookEl[2].addEventListener('click', () => {
  if (newBookEl[0].value !== '' && newBookEl[1].value !== '') {
    bookList.add(`"${newBookEl[0].value}"`, `by ${newBookEl[1].value}`);
    displayBook();
    newBookEl[0].value = '';
    newBookEl[1].value = '';
  } else if (newBookEl[0].value !== '') {
    bookList.add(newBookEl[0].value, 'Anonymous');
    displayBook();
    newBookEl[0].value = '';
    newBookEl[1].value = '';
  }
});

// Date
const datePlace = document.querySelector('.date');
datePlace.innerHTML = Date();

// Navigation
for (let i = 0; i <= section.length; i += 1) {
  section[i].style.display = 'none';
  section[0].style.display = 'block';
  navlist[i].addEventListener('click', () => {
    for (let e = 0; e < section.length; e += 1) {
      section[e].style.display = 'none';
    }
    section[i].style.display = 'block';
  });
}
