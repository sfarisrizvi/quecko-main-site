import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

// Use a function to dynamically check if window is available
const isBrowser = typeof window !== 'undefined';

// Enhancers for Redux, checking if Redux DevTools is available in the browser
const composeEnhancers =
  isBrowser && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

// Function to configure the store
const configureStore = () => {
  return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
};

// Create the store
const store = configureStore();

export default store;