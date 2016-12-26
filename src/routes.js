import React      from 'react';
import { Route }  from 'react-router';
import App        from './containers/AppContainer';
import Home        from './containers/HomeContainer';
import About        from './containers/AboutContainer';


export default (

  <Route name="app" component={App}>

    <Route path='/' component={Home} />
    <Route path='/about' component={About} />

  </Route>

);
