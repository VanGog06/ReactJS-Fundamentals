import { EventEmitter } from 'events';
import dispatcher from '../disptcher';
import data from '../data';

class AuthorStore extends EventEmitter {
  constructor() {
    super();
    this.authors = data.allAuthors();
  }

  getAllAuthors() {
    return this.authors;
  }

  getAuthorById(id) {
    return data.author(id);
  }

  deleteAuthorById(id) {
    data.deleteAuthor(id);
    this.emit('change');
  }

  handleAction(action) {
    switch(action) {
      case 'GET_ALL_AUTHORS':
        this.getAllAuthors(action.authors);
        break;
      case 'GET_AUTHOR_BY_ID':
        this.getAuthorById(action.id);
        break;
      case 'DELETE_AUTHOR_BY_ID':
        this.deleteAuthorById(action.id);
        break;
      default:
        break;
    }
  }
}

let authorStore = new AuthorStore();
dispatcher.register(authorStore.handleAction.bind(authorStore));
export default authorStore;