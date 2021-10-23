import { createStore, compose } from "redux";
import rootReducer from "./Reducers";
// import { devToolsEnhancer } from 'redux-devtools-extension';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(rootReducer, composeEnhancers);
