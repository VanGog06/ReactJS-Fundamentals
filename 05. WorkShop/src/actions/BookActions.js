import dispatcher from '../disptcher';

bookActions = {
  getAllBooks: (books) => {
    dispatcher.dispatch({
      type: 'GET_ALL_BOOKS',
      books
    });
  },
  getBookById: (id) => {
    dispatcher.dispatch({
      type: 'GET_BOOK_BY_ID',
      id
    });
  },
  deleteBookById: (id) => {
    dispatcher.dispatch({
      type: 'DELETE_BOOK_BY_ID',
      id
    })
  },
  createBook: (book) => {
    dispatcher.dispatch({
      type: 'CREATE_BOOK',
      book
    });
  }
};

export default BookActions;