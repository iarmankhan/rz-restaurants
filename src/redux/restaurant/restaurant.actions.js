import RESTAURANT_ACTION_TYPES from "./restaurant.types";
import constants from "../../constants/constants";

// Fetch restaurant start
export const fetchRestaurants = () => {
    return {
        type: RESTAURANT_ACTION_TYPES.FETCH_RESTAURANTS_START
    }
};

// Select current city's restaurant
export const setCurrentRestaurants = (restaurants) => {
    return {
        type: RESTAURANT_ACTION_TYPES.SET_CURRENT_RESTAURANTS,
        payload: restaurants
    }
};

// Fetch restaurants from API
export const fetchRestaurantsAsync = (id) => {
    return async (dispatch, getState) => {

        const {restaurants: {allRestaurants}} = getState();

        // check if current city's restaurant already in cache
        if (id in allRestaurants) {
            dispatch(setCurrentRestaurants(allRestaurants[id]));
            return;
        }

        dispatch(fetchRestaurants())

        try {
            // Fetch from API
            const response = await fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=${id}&entity_type=city&sort=rating`, {
                method: 'GET',
                headers: {
                    "Accept": "application/json",
                    "user-key": constants.API_KEY
                }
            });
            const data = await response.json();

            if (data.restaurants) {
                const newData = {...allRestaurants, [id]: data.restaurants};
                dispatch(fetchRestaurantsSuccess(newData))
                dispatch(setCurrentRestaurants(newData[id]))
            } else {
                dispatch(fetchRestaurantsFailure('No data found'))
            }
        } catch (e) {
            dispatch(fetchRestaurantsFailure(e.message))
        }
    };
};

// Restaurant fetch success
export const fetchRestaurantsSuccess = (restaurants) => {
    return {
        type: RESTAURANT_ACTION_TYPES.FETCH_RESTAURANTS_SUCCESS,
        payload: restaurants
    }
};

// Restaurant fetch failure
export const fetchRestaurantsFailure = (error) => {
    return {
        type: RESTAURANT_ACTION_TYPES.FETCH_RESTAURANTS_FAILURE,
        payload: error.message
    }
}

// Filter restaurants by name & cuisine
export const filterCurrentRestaurants = (id, name, cuisine) => {
    return async (dispatch, getState) => {
        const {restaurants: {allRestaurants}} = getState();
        const filtered = allRestaurants[id].filter(({restaurant}) => {
            return restaurant.name.toLowerCase().includes(name.toLowerCase()) && restaurant.cuisines.toLowerCase().includes(cuisine.toLowerCase())
        });
        dispatch({
            type: RESTAURANT_ACTION_TYPES.FILTER_CURRENT_RESTAURANTS,
            payload: filtered
        })
    };
};

// Reset all the filters
export const resetFilters = (id) => {
    return async (dispatch, getState) => {
        const {restaurants: {allRestaurants}} = getState();

        dispatch({
            type: RESTAURANT_ACTION_TYPES.RESET_FILTERS,
            payload: allRestaurants[id]
        })
    };
};
