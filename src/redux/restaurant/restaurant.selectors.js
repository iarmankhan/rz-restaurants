import {createSelector} from "reselect";

// select initial restaurant state
const selectRestaurantsState = state => state.restaurants;

// select all restaurants
export const selectAllRestaurants = createSelector(
    [selectRestaurantsState],
    restaurants => restaurants.allRestaurants
)

// select currently selected city's restaurants
export const selectCurrentRestaurants = createSelector(
    [selectRestaurantsState],
    restaurants => restaurants.restaurants
)

// select if restaurant data is loading
export const selectIsLoading = createSelector(
    [selectRestaurantsState],
    restaurants => restaurants.isLoading
)

// select restaurant errors
export const selectError = createSelector(
    [selectRestaurantsState],
    restaurants => restaurants.error
)

// select cuisines - for filters
export const selectCuisines = createSelector(
    [selectCurrentRestaurants],
    restaurants => {
        const cuisines = new Set();
        restaurants.forEach(({restaurant}) => {
            const currentCuisines = restaurant.cuisines.split(', ');
            currentCuisines.forEach(c => cuisines.add(c));
        });
        return [...cuisines];
    }
);
