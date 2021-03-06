import React, {useEffect} from "react";
import {Box, Grid, Spinner} from '@chakra-ui/core';
import {createStructuredSelector} from "reselect";
import {
    selectAllRestaurants,
    selectCurrentRestaurants,
    selectError,
    selectIsLoading
} from "../../redux/restaurant/restaurant.selectors";
import {connect} from "react-redux";
import {fetchRestaurantsAsync} from "../../redux/restaurant/restaurant.actions";
import Restaurant from "../../components/RestaurantCard/RestaurantCard.component";
import Filters from "../../components/Filters/Filters.component";
import Layout from "../../components/Layout/Layout.component";
import CenteredView from "../../components/CenteredView/CenteredView.component";

const Restaurants = ({match, restaurants, isLoading, error, fetchRestaurantsFromAPI}) => {
    const {cityId} = match.params;

    useEffect(() => {
        const fetchRestaurants = async (id) => {
            await fetchRestaurantsFromAPI(id);
        }

        fetchRestaurants(cityId).then();
    }, [fetchRestaurantsFromAPI, cityId]);

    if (isLoading) {
        return (
            <CenteredView>
                <Spinner size="xl"/>
            </CenteredView>
        )
    }

    if (!isLoading && error) {
        return (
            <CenteredView>
                Some errors occurred!
            </CenteredView>
        )
    }

    return (
        <Layout>
            <Box>
                <Filters id={cityId}/>
            </Box>
            {
                !isLoading && restaurants.length === 0 ?
                    <CenteredView>No restaurants found!!</CenteredView>
                    :
                    <Grid marginY={5} templateColumns="repeat(3, 1fr)" gap={3}>
                        {
                            restaurants.map(({restaurant}) => {
                                return (
                                    <Restaurant
                                        key={restaurant.id}
                                        id={restaurant.id}
                                        name={restaurant.name}
                                        imageUrl={restaurant.featured_image}
                                        price={restaurant.average_cost_for_two}
                                        user_rating={restaurant.user_rating.aggregate_rating}
                                        votes={restaurant.user_rating.votes}
                                    />
                                )
                            })
                        }
                    </Grid>
            }
        </Layout>
    )
};

const mapStateToProps = createStructuredSelector({
    allRestaurants: selectAllRestaurants,
    restaurants: selectCurrentRestaurants,
    isLoading: selectIsLoading,
    error: selectError,
});

const mapDispatchToProps = dispatch => ({
    fetchRestaurantsFromAPI: id => dispatch(fetchRestaurantsAsync(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Restaurants);
