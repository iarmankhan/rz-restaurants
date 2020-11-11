import {combineReducers} from "redux";
import restaurantReducer from "./restaurant/restaurant.reducers";

const rootReducer = combineReducers({
    restaurants: restaurantReducer
});

export default rootReducer;
