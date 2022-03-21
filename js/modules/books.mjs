import {toLS} from './localStorage.mjs'

class Books {
  constructor() {
    this.list = [];
  }

  // Add book to bookList(w- Title & Author)
  add = (title, author = 'Anonymous') => {
    const book = {
      title,
      author,
    };

    this.list.push(book);
    toLS();

    // section[1].style.display = 'none';
    // section[0].style.display = 'block';
  }

  // Remove book objects
  remove = (title, author) => {
    this.list = this.list.filter((book) => book.title !== title || book.author !== author);
    toLS();
  }
}

export const bookList = new Books();
