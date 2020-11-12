import React, {useEffect, useState} from "react";
import {Box, Button, Input, Select, SimpleGrid} from '@chakra-ui/core';
import {createStructuredSelector} from "reselect";
import {selectCuisines} from "../../redux/restaurant/restaurant.selectors";
import {connect} from "react-redux";
import {filterCurrentRestaurants, resetFilters} from "../../redux/restaurant/restaurant.actions";

const Filters = ({id, filterRestaurants, resetFilters, cuisines}) => {
    const [search, setSearch] = useState({name: '', cuisine: ''});

    useEffect(() => {
        const searchRestaurants = async () => {
            if (search.name !== '' || search.cuisine !== '') {
                await filterRestaurants(id, search.name, search.cuisine)
            }
        }
        searchRestaurants().then();
    }, [search, filterRestaurants, id])

    const searchTextBoxChange = e => {
        setSearch(prevState => ({...prevState, name: e.target.value}))
    }

    const cuisineChange = e => {
        setSearch(prevState => ({...prevState, cuisine: e.target.value}))
    }

    const handleResetFilters = async () => {
        await resetFilters(id);
        setSearch({name: '', cuisine: ''})
    }

    return (
        <SimpleGrid columns={[2, null, 3]} spacing={3}>
            <Box>
                <Input value={search.name} onChange={searchTextBoxChange} placeholder='Search Restaurant'
                       variant='filled'/>
            </Box>
            <Box>
                <Select onChange={cuisineChange} value={search.cuisine} placeholder="Select Cuisines">
                    {
                        cuisines.map(c => (<option key={c} value={c}>{c}</option>))
                    }
                </Select>
            </Box>
            <Box>
                <Button onClick={handleResetFilters}>Reset Filters</Button>
            </Box>
        </SimpleGrid>
    )
};

const mapStateToProps = createStructuredSelector({
    cuisines: selectCuisines
});

const mapDispatchToProps = dispatch => ({
    filterRestaurants: (id, name, cuisine) => dispatch(filterCurrentRestaurants(id, name, cuisine)),
    resetFilters: (id) => dispatch(resetFilters(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
