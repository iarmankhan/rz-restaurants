import {createSelector} from "reselect";

const selectRestaurantsState = state => state.restaurants;

export const selectAllRestaurants = createSelector(
    [selectRestaurantsState],
    restaurants => restaurants.allRestaurants
)

export const selectCurrentRestaurants = createSelector(
    [selectRestaurantsState],
    restaurants => restaurants.restaurants
)

export const selectIsLoading = createSelector(
    [selectRestaurantsState],
    restaurants => restaurants.isLoading
)

export const selectError = createSelector(
    [selectRestaurantsState],
    restaurants => restaurants.error
)

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
