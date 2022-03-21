import fromLS from './modules/localStorage.mjs';
import displayBook from './modules/displayBook.mjs';
import navLinks from './modules/nav.mjs';
import { newBookEl, datePlace } from './modules/elements.mjs';
import { bookList } from './modules/books.mjs';
import { DateTime } from './modules/luxon.js';

fromLS();
displayBook();

newBookEl[2].addEventListener('click', () => {
  if (newBookEl[0].value !== '' && newBookEl[1].value !== '') {
    bookList.add(`"${newBookEl[0].value}"`, `by ${newBookEl[1].value}`);
    displayBook();
    newBookEl[0].value = '';
    newBookEl[1].value = '';
  } else if (newBookEl[0].value !== '') {
    bookList.add(`"${newBookEl[0].value}"`, ' by Anonymous');
    displayBook();
    newBookEl[0].value = '';
    newBookEl[1].value = '';
  }
});

const dt = DateTime.now();
datePlace.innerHTML = dt.toLocaleString(DateTime.DATETIME_MED);

navLinks();
