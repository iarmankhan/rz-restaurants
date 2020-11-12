import RESTAURANT_ACTION_TYPES from "./restaurant.types";
import constants from "../../constants/constants";

export const fetchRestaurants = () => {
    return {
        type: RESTAURANT_ACTION_TYPES.FETCH_RESTAURANTS_START
    }
};

export const setCurrentRestaurants = (restaurants) => {
    return {
        type: RESTAURANT_ACTION_TYPES.SET_CURRENT_RESTAURANTS,
        payload: restaurants
    }
};

export const fetchRestaurantsAsync = (id) => {
    return async (dispatch, getState) => {

        const {restaurants: {allRestaurants}} = getState();

        if(id in allRestaurants){
            dispatch(setCurrentRestaurants(allRestaurants[id]));
            return;
        }

        dispatch(fetchRestaurants())

        try {
            const response = await fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=${id}&entity_type=city&sort=rating`, {
                method: 'GET',
                headers: {
                    "Accept": "application/json",
                    "user-key": constants.API_KEY
                }
            });
            const data = await response.json();

            if(data.restaurants){
                const newData = {...allRestaurants, [id]: data.restaurants};
                dispatch(fetchRestaurantsSuccess(newData))
                dispatch(setCurrentRestaurants(newData[id]))
            }
        }catch (e){
            dispatch(fetchRestaurantsFailure(e.message))
        }
    };
};

export const fetchRestaurantsSuccess = (restaurants) => {
    return {
        type: RESTAURANT_ACTION_TYPES.FETCH_RESTAURANTS_SUCCESS,
        payload: restaurants
    }
};

export const fetchRestaurantsFailure = (error) => {
    return {
        type: RESTAURANT_ACTION_TYPES.FETCH_RESTAURANTS_FAILURE,
        payload: error.message
    }
}
