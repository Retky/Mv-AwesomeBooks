import {bookList} from './modules/books.mjs'
import {fromLS} from './modules/localStorage.mjs'

fromLS()

console.log(bookList);
