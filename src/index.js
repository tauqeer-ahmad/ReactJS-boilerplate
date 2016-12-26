import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory }                   from 'react-router'
import routes                                    from './routes'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

import reducer from './reducers'
// middleware that logs actions
const loggerMiddleware = createLogger({ predicate: (getState, action) => 'development'  });

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware, // lets us dispatch() functions
      loggerMiddleware,
    ),
  );

  const store =  createStore(reducer, initialState, enhancer);
  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./reducers/index').default
      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}

const store = configureStore({});

const App = () => (
  <Provider store={store}>
    <Router history={hashHistory} children={routes} />
  </Provider>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
