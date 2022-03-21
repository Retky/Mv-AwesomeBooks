import {bookList} from './books.mjs'

const toLS = () => {
  const to = JSON.stringify(bookList.list);
  localStorage.setItem('books', to);
}

const fromLS = () => {
  if (localStorage.books) {
    const from = JSON.parse(localStorage.books);
    bookList.list = from;
  }

}

export {toLS, fromLS}
