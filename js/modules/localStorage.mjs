import bookList from './books.mjs'

const toLS = () => {
  const to = JSON.stringify(bookList.list);
  localStorage.setItem('books', toLS);
}

export {toLS}
