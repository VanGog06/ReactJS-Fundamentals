import dispatcher from '../disptcher';

let authorActions = {
  getAllAuthors: (authors) => {
    dispatcher.dispatch({
      type: 'GET_ALL_AUTHORS',
      authors
    });
  },
  getAuthorById: (id) => {
    dispatcher.dispatch({
      type: 'GET_AUTHOR_BY_ID',
      id
    });
  },
  deleteAuthorById: (id) => {
    dispatcher.dispatch({
      type: 'DELETE_AUTHOR_BY_ID',
      id
    })
  }
};

export default authorActions;