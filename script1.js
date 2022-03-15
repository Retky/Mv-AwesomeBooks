class Book {
    constructor(title, author){
      this.title = title;
      this.author = author;
    }
}
  
  
class Books{
    constructor(){
        this.booklist = [];
    }
   
    addBook(book){
        this.booklist.push(book);
    }
    removeBook(title, author){
        this.booklist = this.bookList.filter((book) => book.title !== title || book.author !== author);
    }
}


  
let book = new Book(title, author);
let books = new Books();