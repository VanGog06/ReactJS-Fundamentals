import React, {Component} from 'react';
import TitleComponent from './sub-components/TitleComponent';
import SelectComponent from './sub-components/SelectComponent';
import AuthorsComponent from './sub-components/AuthorsComponent';
import PaginationComponent from './sub-components/PaginationComponent';

import data from '../data';

class AllAuthorsComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authors: [],
      options: ['ascending', 'descending'],
      sortCriteria: '',
      activePage: 1
    };
  }

  componentDidMount() {
    data
      .getAuthors()
      .then(authors => {
        this.setState({
          authors: authors,
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
        <TitleComponent title="All Authors" />
        <SelectComponent options={this.state.options} onSelectChange={this.handleChange.bind(this)}/>
        <AuthorsComponent sortCriteria={this.state.sortCriteria} authors={this.state.authors}
                        activePage={this.state.activePage}/>
        <PaginationComponent size={this.state.authors.length} handleSelect={this.handleSelect.bind(this)}
                             activePage={this.state.activePage}/>
      </div>
    );
  }
}

export default AllAuthorsComponent;