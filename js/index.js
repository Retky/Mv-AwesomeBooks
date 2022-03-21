import {bookList} from './modules/books.mjs'
import {fromLS} from './modules/localStorage.mjs'
import {displayBook} from './modules/displayBook.mjs'
import {addBtn} from './modules/addbook.mjs'
import {navLinks} from './modules/nav.mjs'

fromLS()
displayBook()
navLinks()
