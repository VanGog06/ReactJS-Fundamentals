import { EventEmitter } from 'events';
import dispatcher from '../disptcher';
import data from '../data';

class BookStore extends EventEmitter {
  constructor() {
    super();
    this.books = data.allBooks();
  }

  getAllBooks() {
    return this.books
  }

  getBookByid(id) {
    return data.book(id);
  }

  deleteBookById(id) {
    data.deleteBook(id);
    this.emit('change');
  }

  createBook(book) {
    this.books.then(books => {
      books.push(book);
    });
  }

  handleAction(action) {
    switch(action) {
      case 'GET_ALL_BOOKS':
        this.getAllBooks(action.books);
        break;
      case 'GET_BOOK_BY_ID':
        this.getBookByid(action.id);
        break;
      case 'DELETE_BOOK_BY_ID':
        this.deleteBookById(action.id);
        break;
      case 'CREATE_BOOK':
        this.createBook(action.book);
        break;
      default:
        break;
    }
  }
}

let bookStore = new BookStore();
dispatcher.register(bookStore.handleAction.bind(bookStore));
export default bookStore;