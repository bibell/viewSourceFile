import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import {createStore,applyMiddleware} from 'redux';
//import * as action from './actions/validateAction';
import allReducer from './reducer/validateReducer';
import * as saga from './saga/sagaReducer';
//import handleAllRequest from './saga/sagaReducer';

let sagaMiddle=createSagaMiddleware();
let store=createStore(allReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
applyMiddleware(sagaMiddle));
sagaMiddle.run(saga.rSaga)
//sagaMiddle.run(handleAllRequest);
//const store=createStore(allReducer)
ReactDOM.render(<Provider store={store}>
                   <App/>
              </Provider>,document.getElementById("root"))