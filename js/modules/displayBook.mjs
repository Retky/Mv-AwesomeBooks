import {clearAll} from './clearBooks.mjs';
import {bookList} from './books.mjs';
import {bookSection} from './elements.mjs';

const displayBook = () => {
  clearAll();

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

    nameDiv.appendChild(bTitle);
    nameDiv.appendChild(bAuthor);
    bDiv.appendChild(nameDiv);
    bDiv.appendChild(bBtn);

    bookSection.appendChild(bDiv);

    // Listener Remove
    bBtn.addEventListener('click', () => {
      bookSection.removeChild(bDiv);
      return bookList.remove(book.title, book.author);
    });
  });
}

export {displayBook}
