import { bookList } from './books.mjs';

const fromLS = () => {
  if (localStorage.books) {
    const from = JSON.parse(localStorage.books);
    bookList.list = from;
  }
};

export default fromLS;
