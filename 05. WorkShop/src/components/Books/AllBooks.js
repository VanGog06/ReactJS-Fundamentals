import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import Books from './Books';
import BookStore from '../../stores/BookStore';

class AllBooks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      offset: 0,
      criteria: ['date']
    };

    this.sortTitle = this.sortTitle.bind(this);
    this.sortAuthor = this.sortAuthor.bind(this);
    this.sortDate = this.sortDate.bind(this);
    this.getBooks = this.getBooks.bind(this);
  }

  componentDidMount() {
    this.getBooks(0, 2);
  }

  comparator(criteria) {
    let prop = criteria[0];

    if (criteria.length > 1) {
      let next = criteria[1];
      return (a, b) => b[prop][next].toString().localeCompare(a[prop][next].toString());
    }

    return (a, b) => b[prop].toString().localeCompare(a[prop].toString());
  }

  sortTitle() {
    this.setState({ criteria: ['title'] });
    this.getBooks(this.state.offset, this.state.offset + 2);
  }

  sortAuthor() {
    this.setState({ criteria: ['author', 'name'] });
    this.getBooks(this.state.offset, this.state.offset + 2);
  }

  sortDate() {
    this.setState({ criteria: ['date'] });
    this.getBooks(this.state.offset, this.state.offset + 2);
  }

  getBooks(start, end) {
    BookStore
      .getAllBooks()
      .then(books => {
        this.setState({
          books: books.sort(this.comparator(this.state.criteria)).slice(start, end),
          pageCount: books.length / 2
        });
      })
  }

  handlePageClick = (input) => {
    let selected = input.selected;
    let offset = Math.ceil(selected * 2);

    this.setState({ offset: offset }, () => {
      this.getBooks(this.state.offset, this.state.offset + 2);
    });
  };

  render() {
    return (
      <div className="container">
        <button onClick={this.sortTitle}>Title</button>
        <button onClick={this.sortAuthor}>Author</button>
        <button onClick={this.sortDate}>Date</button>
        <Books books={this.state.books} offset={this.state.offset} />

        <ReactPaginate previousLabel={'Previous'}
                       nextLabel={'Next'}
                       breakLabe={<a href="">...</a>}
                       breakClassName={'break-me'}
                       pageCount={this.state.pageCount}
                       marginPagesDisplayed={2}
                       pageRangeDisplayed={5}
                       onPageChange={this.handlePageClick}
                       containerClassName={'pagination'}
                       subContainerClassName={'pages pagination'}
                       activeClassName={'active'} />
      </div>
    );
  }
}

export default AllBooks;