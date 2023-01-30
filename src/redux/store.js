import { createStore, applyMiddleware, compose } from "redux";
import logger from 'redux-logger';
import thunk from "redux-thunk";
import rootReducer from './reducers';


const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware, logger)));
        
export default store;