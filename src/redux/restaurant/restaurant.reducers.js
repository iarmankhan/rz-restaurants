import RESTAURANT_ACTION_TYPES from "./restaurant.types";
import storage from 'redux-persist/lib/storage'

const INITIAL_STATE = {
    allRestaurants: {},
    restaurants: [],
    isLoading: false,
    error: null
};

export const restaurantConfig = {
    key: 'restaurant',
    storage,
    blacklist: ['isLoading', 'error']
};

export const restaurantReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case RESTAURANT_ACTION_TYPES.FETCH_RESTAURANTS_START:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case RESTAURANT_ACTION_TYPES.FETCH_RESTAURANTS_SUCCESS:
            return {
                ...state,
                allRestaurants: action.payload,
                isLoading: false,
                error: null
            };
        case RESTAURANT_ACTION_TYPES.FETCH_RESTAURANTS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        case RESTAURANT_ACTION_TYPES.SET_CURRENT_RESTAURANTS:
            return {
                ...state,
                restaurants: action.payload,
                isLoading: false,
                error: null
            }
        default:
            return state;
    }
}
