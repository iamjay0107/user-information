import {applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import logger from 'redux-logger';

import reducers from './reducers/main';


const customMiddleWare = store => next => action => {
    console.log("Middleware triggered:", action);
    next(action);
  }


  const f = store => next => action => {
        if(action.type === "TEST"){
            console.log("TEST MIDDLEWARE")
        }
        next(action)
  }
  
const middleware = applyMiddleware(thunk, f);

export default createStore(reducers, middleware);



