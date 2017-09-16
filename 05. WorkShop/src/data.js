let authors = [
  {"id": "0", "name": "pesho", "image": "https://static01.nyt.com/images/2017/01/12/well/move/adam-bryant-headshot/adam-bryant-headshot-square320-v2.jpg", "books": ['first', 'seventh', 'fifth'] },
  {"id": "1", "name": "gosho", "image": "https://www.jamsadr.com/images/neutrals/person-donald-900x1080.jpg", "books": ['second', 'fouth'] },
  {"id": "2", "name": "stamat", "image": "https://www.jamsadr.com/images/neutrals/person-donald-900x1080.jpg", "books": ['third', 'sixth'] }
];

let books = [
  { "id": "1", "date": new Date(2009, 4, 12), "title": "first", "author": authors[0], "price": "200", "description": "here", "image": "https://about.canva.com/wp-content/uploads/sites/3/2015/01/creative_bookcover.png", "comments": [ {"Pe6o": "Very nice"} ] },
  { "id": "2", "date": new Date(2010, 2, 4), "title": "second", "author": authors[1], "price": "100", "description": "there", "image": "https://about.canva.com/wp-content/uploads/sites/3/2015/01/creative_bookcover.png", "comments": [ {"Pe6o": "Very nice"} ] },
  { "id": "3", "date": new Date(2011, 6, 23), "title": "third", "author": authors[2], "price": "20", "description": "why", "image": "https://about.canva.com/wp-content/uploads/sites/3/2015/01/creative_bookcover.png", "comments": [ {"Pe6o": "Very nice"} ] },
  { "id": "4", "date": new Date(2012, 7, 29), "title": "fouth", "author": authors[1], "price": "150", "description": "hello", "image": "https://about.canva.com/wp-content/uploads/sites/3/2015/01/creative_bookcover.png", "comments": [ {"Pe6o": "Very nice"} ] },
  { "id": "5", "date": new Date(2013, 2, 11), "title": "fifth", "author": authors[0], "price": "50", "description": "very nice", "image": "https://about.canva.com/wp-content/uploads/sites/3/2015/01/creative_bookcover.png", "comments": [ {"Pe6o": "Very nice"} ] },
  { "id": "6", "date": new Date(2014, 1, 16), "title": "sixth", "author": authors[2], "price": "34", "description": "look here", "image": "https://about.canva.com/wp-content/uploads/sites/3/2015/01/creative_bookcover.png", "comments": [ {"Pe6o": "Very nice"} ] },
  { "id": "7", "date": new Date(2015, 12, 26), "title": "seventh", "author": authors[0], "price": "88", "description": "why not", "image": "https://about.canva.com/wp-content/uploads/sites/3/2015/01/creative_bookcover.png", "comments": [ {"Pe6o": "Very nice"} ] }
];

module.exports = {
  allBooks: () => {
    return new Promise((resolve, reject) => {
      if (books) {
        resolve(books);
      } else {
        reject('No books');
      }
    });
  },
  book: (id) => {
    return new Promise((resolve, reject) => {
      let index = books.findIndex(el => el.id === id);
      if (index !== -1) {
        resolve(books[index]);
      } else {
        reject('No book with that id');
      }
    });
  },
  allAuthors: () => {
    return new Promise((resolve, reject) => {
      if (authors) {
        authors.forEach(function(element) {
          element.books = books.filter(book => book.author.id === element.id);
        }, this);
        resolve(authors);
      } else {
        reject('No authors');
      }
    });
  },
  author: (id) => {
    return new Promise((resolve, reject) => {
      let authorIndex = authors.findIndex(el => el.id === id);
      if (authorIndex !== -1) {
        authors[authorIndex].books = books.filter(book => book.author.id === id);
        resolve(authors[authorIndex]);
      } else {
        reject('No author with that id');
      }
    });
  },
  deleteAuthor: (id) => {
    let authorIndex = authors.findIndex(el => el.id === id);
    authors.splice(authorIndex, 1);
  },
  deleteBook: (id) => {
    let bookIndex = books.findIndex(el => el.id === id);
    books.splice(bookIndex, 1);
  }
};