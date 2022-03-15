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

    addBook(book){}
    removeBook(book){}
}
  
let books = new Books();