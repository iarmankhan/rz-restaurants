import {combineReducers} from "redux";
import {persistReducer} from 'redux-persist'
import {restaurantConfig, restaurantReducer} from "./restaurant/restaurant.reducers";
import storage from 'redux-persist/lib/storage'

// Root persist config
const rootConfig = {
    key: 'root',
    storage,
    blacklist: []
};

// Combine all reducers
const rootReducer = combineReducers({
    restaurants: persistReducer(restaurantConfig, restaurantReducer)
});

export default persistReducer(rootConfig, rootReducer);
