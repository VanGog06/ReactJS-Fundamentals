const data = {
  getBooks: () => {
    return new Promise((resolve, reject) => {
      let booksData = [
        { id: 1, name: 'First', author: 'Pesho', creationDate: new Date("2015-03-25"), description: 'When writers make their descriptions fresh, they move their stories forward and imbue their work with atmosphere. Monica Wood helps squeeze the greatest flavour from language and provides insight into how detail, editing, style, point of view and original word depictions can be used to create unforgettable images that will stick with readers for a lifetime.', price: 111, image: 'https://about.canva.com/wp-content/uploads/sites/3/2015/01/vintage_bookcover.png' },
        { id: 2, name: 'Second', author: 'Gosho', creationDate: new Date("2016-04-05"), description: 'When writers make their descriptions fresh, they move their stories forward and imbue their work with atmosphere. Monica Wood helps squeeze the greatest flavour from language and provides insight into how detail, editing, style, point of view and original word depictions can be used to create unforgettable images that will stick with readers for a lifetime.', price: 111, image: 'https://about.canva.com/wp-content/uploads/sites/3/2015/01/vintage_bookcover.png' },
        { id: 3, name: 'Third', author: 'Ivan', creationDate: new Date("2013-01-21"), description: 'When writers make their descriptions fresh, they move their stories forward and imbue their work with atmosphere. Monica Wood helps squeeze the greatest flavour from language and provides insight into how detail, editing, style, point of view and original word depictions can be used to create unforgettable images that will stick with readers for a lifetime.', price: 111, image: 'https://about.canva.com/wp-content/uploads/sites/3/2015/01/vintage_bookcover.png' },
        { id: 4, name: 'Fourth', author: 'Dragan', creationDate: new Date("2017-10-12"), description: 'When writers make their descriptions fresh, they move their stories forward and imbue their work with atmosphere. Monica Wood helps squeeze the greatest flavour from language and provides insight into how detail, editing, style, point of view and original word depictions can be used to create unforgettable images that will stick with readers for a lifetime.', price: 111, image: 'https://about.canva.com/wp-content/uploads/sites/3/2015/01/vintage_bookcover.png' },
        { id: 5, name: 'Fifth', author: 'Petkan', creationDate: new Date("2009-05-10"), description: 'When writers make their descriptions fresh, they move their stories forward and imbue their work with atmosphere. Monica Wood helps squeeze the greatest flavour from language and provides insight into how detail, editing, style, point of view and original word depictions can be used to create unforgettable images that will stick with readers for a lifetime.', price: 111, image: 'https://about.canva.com/wp-content/uploads/sites/3/2015/01/vintage_bookcover.png' },
        { id: 6, name: 'Sixth', author: 'Gichka', creationDate: new Date("2012-06-06"), description: 'When writers make their descriptions fresh, they move their stories forward and imbue their work with atmosphere. Monica Wood helps squeeze the greatest flavour from language and provides insight into how detail, editing, style, point of view and original word depictions can be used to create unforgettable images that will stick with readers for a lifetime.', price: 111, image: 'https://about.canva.com/wp-content/uploads/sites/3/2015/01/vintage_bookcover.png' },
        { id: 7, name: 'Seventh', author: 'Stefka', creationDate: new Date("2014-12-24"), description: 'When writers make their descriptions fresh, they move their stories forward and imbue their work with atmosphere. Monica Wood helps squeeze the greatest flavour from language and provides insight into how detail, editing, style, point of view and original word depictions can be used to create unforgettable images that will stick with readers for a lifetime.', price: 111, image: 'https://about.canva.com/wp-content/uploads/sites/3/2015/01/vintage_bookcover.png' },
        { id: 8, name: 'Eight', author: 'Lelq Rose', creationDate: new Date("2011-08-16"), description: 'When writers make their descriptions fresh, they move their stories forward and imbue their work with atmosphere. Monica Wood helps squeeze the greatest flavour from language and provides insight into how detail, editing, style, point of view and original word depictions can be used to create unforgettable images that will stick with readers for a lifetime.', price: 111, image: 'https://about.canva.com/wp-content/uploads/sites/3/2015/01/vintage_bookcover.png' },
        { id: 9, name: 'Ninth', author: 'Stamat', creationDate: new Date("2013-03-03"), description: 'When writers make their descriptions fresh, they move their stories forward and imbue their work with atmosphere. Monica Wood helps squeeze the greatest flavour from language and provides insight into how detail, editing, style, point of view and original word depictions can be used to create unforgettable images that will stick with readers for a lifetime.', price: 111, image: 'https://about.canva.com/wp-content/uploads/sites/3/2015/01/vintage_bookcover.png' },
        { id: 10, name: 'Tenth', author: 'Ani', creationDate: new Date("2015-07-04"), description: 'When writers make their descriptions fresh, they move their stories forward and imbue their work with atmosphere. Monica Wood helps squeeze the greatest flavour from language and provides insight into how detail, editing, style, point of view and original word depictions can be used to create unforgettable images that will stick with readers for a lifetime.', price: 111, image: 'https://about.canva.com/wp-content/uploads/sites/3/2015/01/vintage_bookcover.png' },
        { id: 11, name: 'Eleventh', author: 'Kolio', creationDate: new Date("2014-02-02"), description: 'When writers make their descriptions fresh, they move their stories forward and imbue their work with atmosphere. Monica Wood helps squeeze the greatest flavour from language and provides insight into how detail, editing, style, point of view and original word depictions can be used to create unforgettable images that will stick with readers for a lifetime.', price: 111, image: 'https://about.canva.com/wp-content/uploads/sites/3/2015/01/vintage_bookcover.png' },
        { id: 12, name: 'Twelfth', author: 'Vulcho', creationDate: new Date("2017-11-06"), description: 'When writers make their descriptions fresh, they move their stories forward and imbue their work with atmosphere. Monica Wood helps squeeze the greatest flavour from language and provides insight into how detail, editing, style, point of view and original word depictions can be used to create unforgettable images that will stick with readers for a lifetime.', price: 111, image: 'https://about.canva.com/wp-content/uploads/sites/3/2015/01/vintage_bookcover.png' },
        { id: 13, name: 'Thirteenth', author: 'Kapka', creationDate: new Date("2016-05-06"), description: 'When writers make their descriptions fresh, they move their stories forward and imbue their work with atmosphere. Monica Wood helps squeeze the greatest flavour from language and provides insight into how detail, editing, style, point of view and original word depictions can be used to create unforgettable images that will stick with readers for a lifetime.', price: 111, image: 'https://about.canva.com/wp-content/uploads/sites/3/2015/01/vintage_bookcover.png' },
        { id: 14, name: 'Fourteenth', author: 'Elka', creationDate: new Date("2013-04-07"), description: 'When writers make their descriptions fresh, they move their stories forward and imbue their work with atmosphere. Monica Wood helps squeeze the greatest flavour from language and provides insight into how detail, editing, style, point of view and original word depictions can be used to create unforgettable images that will stick with readers for a lifetime.', price: 111, image: 'https://about.canva.com/wp-content/uploads/sites/3/2015/01/vintage_bookcover.png' },
        { id: 15, name: 'Fifteenth', author: 'Smqtai', creationDate: new Date("2017-07-04"), description: 'When writers make their descriptions fresh, they move their stories forward and imbue their work with atmosphere. Monica Wood helps squeeze the greatest flavour from language and provides insight into how detail, editing, style, point of view and original word depictions can be used to create unforgettable images that will stick with readers for a lifetime.', price: 111, image: 'https://about.canva.com/wp-content/uploads/sites/3/2015/01/vintage_bookcover.png' }
      ];

      resolve(booksData);
    });
  },
  getComment: () => {
    return new Promise((resolve, reject) => {
      let commentsData = [
        { id: 1, comment: 'Very nice book' },
        { id: 2, comment: 'I really like it' },
        { id: 3, comment: 'The best book ever' }
      ];

      resolve(commentsData);
    });
  },
  getAuthors: () => {
    return new Promise((resolve, reject) => {
      let authorsData = [
        { id: '1', image: 'http://www.xlibris.com/uploadedImages/Author_Centre/Author_Spotlight/2012/author_john_kortum.jpg', name: 'Pesho', books: ['First', 'Second'] },
        { id: '2', image: 'http://www.xlibris.com/uploadedImages/Author_Centre/Author_Spotlight/2012/author_john_kortum.jpg', name: 'Gosho', books: ['Third', 'Fourth'] },
        { id: '3', image: 'http://www.xlibris.com/uploadedImages/Author_Centre/Author_Spotlight/2012/author_john_kortum.jpg', name: 'Ivan', books: ['Fifth', 'Sixth'] },
        { id: '4', image: 'http://www.xlibris.com/uploadedImages/Author_Centre/Author_Spotlight/2012/author_john_kortum.jpg', name: 'Dragan', books: ['Seventh', 'Eighth'] },
        { id: '5', image: 'http://www.xlibris.com/uploadedImages/Author_Centre/Author_Spotlight/2012/author_john_kortum.jpg', name: 'Petkan', books: ['Ninth', 'Tenth'] },
        { id: '6', image: 'http://www.xlibris.com/uploadedImages/Author_Centre/Author_Spotlight/2012/author_john_kortum.jpg', name: 'Gichka', books: ['First', 'Third'] },
        { id: '7', image: 'http://www.xlibris.com/uploadedImages/Author_Centre/Author_Spotlight/2012/author_john_kortum.jpg', name: 'Stefka', books: ['Fifth', 'Seventh'] },
        { id: '8', image: 'http://www.xlibris.com/uploadedImages/Author_Centre/Author_Spotlight/2012/author_john_kortum.jpg', name: 'Lelq Rose', books: ['Ninth', 'Second'] },
        { id: '9', image: 'http://www.xlibris.com/uploadedImages/Author_Centre/Author_Spotlight/2012/author_john_kortum.jpg', name: 'Stamat', books: ['Fourth', 'Sixth'] },
        { id: '10', image: 'http://www.xlibris.com/uploadedImages/Author_Centre/Author_Spotlight/2012/author_john_kortum.jpg', name: 'Ani', books: ['Eighth', 'Tenth'] },
        { id: '11', image: 'http://www.xlibris.com/uploadedImages/Author_Centre/Author_Spotlight/2012/author_john_kortum.jpg', name: 'Kolio', books: ['First', 'Fourth'] },
        { id: '12', image: 'http://www.xlibris.com/uploadedImages/Author_Centre/Author_Spotlight/2012/author_john_kortum.jpg', name: 'Vulcho', books: ['Second', 'Third'] },
        { id: '13', image: 'http://www.xlibris.com/uploadedImages/Author_Centre/Author_Spotlight/2012/author_john_kortum.jpg', name: 'Kapka', books: ['Fifth', 'Eighth'] },
        { id: '14', image: 'http://www.xlibris.com/uploadedImages/Author_Centre/Author_Spotlight/2012/author_john_kortum.jpg', name: 'Elka', books: ['Sixth', 'Seventh'] },
        { id: '15', image: 'http://www.xlibris.com/uploadedImages/Author_Centre/Author_Spotlight/2012/author_john_kortum.jpg', name: 'Smqtai', books: ['Ninth', 'First'] }
      ];

      resolve(authorsData);
    });
  }
};

module.exports = data;