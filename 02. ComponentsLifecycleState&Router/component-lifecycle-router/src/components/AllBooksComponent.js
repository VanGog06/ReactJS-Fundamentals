import React, {Component} from 'react';
import TitleComponent from './sub-components/TitleComponent';
import SelectComponent from './sub-components/SelectComponent';
import BooksComponent from './sub-components/BooksComponent';
import PaginationComponent from './sub-components/PaginationComponent';

import data from '../data';

class AllAuthorsComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      options: ['title', 'author', 'date'],
      sortCriteria: '',
      activePage: 1
    };
  }

  componentDidMount() {
    data
      .getBooks()
      .then(books => {

        this.setState({
          books: books,
        });
      });
  }

  handleSelect(eventKey) {
    this.setState(prevState => ({
      activePage: eventKey,
    }));
  }

  handleChange(event) {
    this.setState({
      sortCriteria: event.target.value
    });
  }

  render() {
    return (
      <div className="container books-container">
        <TitleComponent title="All Books"/>
        <SelectComponent options={this.state.options} onSelectChange={this.handleChange.bind(this)}/>
        <BooksComponent sortCriteria={this.state.sortCriteria} books={this.state.books}
                        activePage={this.state.activePage}/>
        <PaginationComponent size={this.state.books.length} handleSelect={this.handleSelect.bind(this)}
                             activePage={this.state.activePage}/>
      </div>
    );
  }
}

export default AllAuthorsComponent;