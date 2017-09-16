import React, { Component } from 'react';
import Authors from './Authors';
import ReactPaginate from 'react-paginate';
import AuthorStore from '../../stores/AuthorStore';

class AllAuthors extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authors: [],
      offset: 0
    };

    this.handlePageClick = this.handlePageClick.bind(this);
    this.getAuthors = this.getAuthors.bind(this);
    this.ascending = this.ascending.bind(this);
    this.descending = this.descending.bind(this);
  }

  componentDidMount() {
    this.getAuthors(0, 2, true);
  }

  comparator(reverse) {
    if (reverse) {
      return (a, b) => a['name'].toString().localeCompare(b['name'].toString());
    }

    return (a, b) => b['name'].toString().localeCompare(a['name'].toString());
  }

  getAuthors(start, end, criteria) {
    AuthorStore
      .getAllAuthors()
      .then(objs => {
        this.setState({
          authors: objs.sort(this.comparator(criteria)).slice(start, end),
          pageCount: objs.length / 2
        });
      });
  }

  ascending() {
    this.getAuthors(this.state.offset, this.state.offset + 2, true);
  }

  descending() {
    this.getAuthors(this.state.offset, this.state.offset + 2);
  }

  handlePageClick = (input) => {
    let selected = input.selected;
    let offset = Math.ceil(selected * 2);

    this.setState({ offset: offset }, () => {
      this.getAuthors(this.state.offset, this.state.offset + 2);
    });
  };

  render() {
    return (
      <div className="container">
        <h3 className="text-center">Welcome to
          <strong> Books&Authors 2017</strong>
        </h3>
        <button onClick={this.ascending}>Ascending</button>
        <button onClick={this.descending}>Descending</button>
        <Authors authors={this.state.authors} offset={this.state.offset} />

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

export default AllAuthors;
