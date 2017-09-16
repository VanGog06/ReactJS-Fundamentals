const Helpers = {
  sliceArray: (array, start, size) => {
    return array.slice(start, size);
  },
  sortArray: (array, criteria) => {
    let sortedArray = [];

    switch (criteria) {
      case 'date':
        sortedArray = array.sort((a, b) => {
          return b.creationDate - a.creationDate;
        });
        break;
      case 'author':
        sortedArray = array.sort((a, b) => {
          return a.author.localeCompare(b.author);
        });
        break;
      case 'descending':
        sortedArray = array.sort((a, b) => {
          return b.name.localeCompare(a.name);
        });
        break;
      default:
        sortedArray = array.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
        break;
    }

    return sortedArray;
  },
  paginationItems: (size) => {
    return size / 10 === 0 ? size / 10 : (size / 10) + 1;
  }
};

module.exports = Helpers;