import {newBookEl} from './elements.mjs'
import {displayBook} from './displayBook.mjs'
import {bookList} from './books.mjs'

const addBtn = newBookEl[2].addEventListener('click', () => {
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

export {addBtn}
