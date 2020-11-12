import {combineReducers} from "redux";
import {persistReducer} from 'redux-persist'
import {restaurantReducer, restaurantConfig} from "./restaurant/restaurant.reducers";
import storage from 'redux-persist/lib/storage'

const rootConfig = {
    key: 'root',
    storage,
    blacklist: []
};

const rootReducer = combineReducers({
    restaurants: persistReducer(restaurantConfig, restaurantReducer)
});

export default persistReducer(rootConfig, rootReducer);
