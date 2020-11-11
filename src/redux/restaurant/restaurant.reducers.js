import RESTAURANT_ACTION_TYPES from "./restaurant.types";

const INITIAL_STATE = {
    restaurants: {},
    isLoading: false,
    error: null
};

const restaurantReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case RESTAURANT_ACTION_TYPES.FETCH_RESTAURANTS:
            return {
                ...state,
                restaurants: action.payload
            }
        default:
            return state;
    }
}

export default restaurantReducer;
