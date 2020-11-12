import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./root-reducer";
import logger from "redux-logger";
import {persistStore} from "redux-persist";

// Add redux thunk as middleware
const middlewares = [thunk];

// Add logger for development
if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
}

// create store
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// create persistor
export const persistor = persistStore(store)
