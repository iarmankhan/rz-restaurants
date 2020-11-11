import React from "react";
import {Box, Text} from '@chakra-ui/core';

const Restaurants = ({match}) => {
    return (
        <Box>
            <Text>{match.params.cityId}</Text>
        </Box>
    )
};

export default Restaurants;
