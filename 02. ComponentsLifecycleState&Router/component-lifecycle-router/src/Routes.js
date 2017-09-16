import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './components/HomePage';
import AllBooksComponent from './components/AllBooksComponent';
import BookDetailsComponent from './components/BookDetailsComponent';
import AllAuthorsComponent from './components/AllAuthorsComponent';
import AuthorDetailsComponent from './components/AuthorDetailsComponent';
import NotFoundPage from './components/NotFoundPage';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/books/all" component={AllBooksComponent} />
    <Route path="/books/:id" component={BookDetailsComponent} />
    <Route path="/authors/all" component={AllAuthorsComponent} />
    <Route path="/authors/:id" component={AuthorDetailsComponent} />
    <Route component={NotFoundPage} />
  </Switch>
);

export default Routes;