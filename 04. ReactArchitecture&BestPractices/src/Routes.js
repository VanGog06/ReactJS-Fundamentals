import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import AllBooks from './components/Books/AllBooks';
import BookById from './components/Books/BookById';
import AllAuthors from './components/Authors/AllAuthors';
import AuthorById from './components/Authors/AuthorById';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/books/all" component={AllBooks} />
    <Route path="/books/:id" component={BookById} />
    <Route path="/authors/all" component={AllAuthors} />
    <Route path="/authors/:id" component={AuthorById} />
  </Switch>
);

export default Routes;