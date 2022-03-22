import displayBook from './displayBook.mjs';

const addListener = (newBookEl, bookList, bookSection) => {
  newBookEl[2].addEventListener('click', () => {
    if (newBookEl[0].value !== '' && newBookEl[1].value !== '') {
      bookList.add(`"${newBookEl[0].value}"`, `by ${newBookEl[1].value}`);
      displayBook(bookList, bookSection);
      newBookEl[0].value = '';
      newBookEl[1].value = '';
    } else if (newBookEl[0].value !== '') {
      bookList.add(`"${newBookEl[0].value}"`, ' by Anonymous');
      displayBook(bookList, bookSection);
      newBookEl[0].value = '';
      newBookEl[1].value = '';
    }
  });
};

export default addListener;
