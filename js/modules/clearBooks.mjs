import {bookSection} from './elements.mjs'

const clearAll = () => {
  const remove = bookSection.querySelectorAll('.book');
  remove.forEach((book) => {
    bookSection.removeChild(book);
  });
}

export {clearAll}
