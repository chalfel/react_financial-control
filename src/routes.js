import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Add from './pages/Add';
import Main from './pages/Main';

const Routes = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Main} exact></Route>
        <Route path="/add" component={Add} exact></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;