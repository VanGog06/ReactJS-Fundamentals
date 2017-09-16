import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from '../../common/routes/PrivateRoute';

import RegisterPage from '../../users/RegisterPage';
import LoginPage from '../../users/LoginPage';
import LogoutPage from '../../users/LogoutPage';
import ListHotelsPage from '../../hotels/ListHotelsPage';
import CreateHotelPage from '../../hotels/CreateHotelPage';
import HotelById from '../../hotels/HotelById';
import PageNotFound from '../../common/PageNotFound';

const Routes = () => (
  <Switch>
    <Route exact path='/' component={ListHotelsPage} />
    <Route path='/users/login' component={LoginPage} />
    <Route path='/users/register' component={RegisterPage} />
    <Route path='/users/logout' component={LogoutPage} />
    <PrivateRoute path='/hotels/create' component={CreateHotelPage} />
    <PrivateRoute path='/hotels/details/:id' component={HotelById} />
    <Route component={PageNotFound} />
  </Switch>
);

export default Routes;