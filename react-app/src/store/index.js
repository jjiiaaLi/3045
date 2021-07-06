import {createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import session from "./session"
import destinationReducer from "./destinations";
import lodgingReducer from "./lodgings";
import activitiesReducer from './activities';
import reviewReducer from "./reviews";
import UserReducers from "./users";
import bookingsReducer from "./bookings";

const rootReducer = combineReducers({
    session,
    destinations:destinationReducer,
    lodgings:lodgingReducer,
    activities:activitiesReducer,
    reviews:reviewReducer,
    users:UserReducers,
    bookings:bookingsReducer,
});


let enhancer;

if (process.env.NODE_ENV === 'production') {
    enhancer = applyMiddleware(thunk);
} else {
    const logger = require('redux-logger').default;
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
