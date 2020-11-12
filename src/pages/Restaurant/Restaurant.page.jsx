import React, {useEffect, useState} from 'react';
import {Box, Button, Flex, Heading, Image, Link, Spinner, Text} from '@chakra-ui/core'
import Layout from "../../components/Layout/Layout.component";
import {StarIcon} from "@chakra-ui/icons";
import CenteredView from "../../components/CenteredView/CenteredView.component";

const Restaurant = ({match}) => {
    const {restaurantId} = match.params;
    const [restaurant, setRestaurant] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSingleRestaurant = async () => {
            setError(null);
            setIsLoading(true);
            try {
                const response = await fetch(`https://developers.zomato.com/api/v2.1/restaurant?res_id=${restaurantId}`, {
                    method: 'GET',
                    headers: {
                        "Accept": "application/json",
                        "user-key": process.env.REACT_APP_API_KEY
                    }
                });
                const data = await response.json();

                if(data?.code === 403 || data?.code === 404){
                    throw new Error("Some errors occurred")
                }
                setRestaurant(data);
            } catch (e) {
                setError(e.message)
            }
            setIsLoading(false)
        };
        fetchSingleRestaurant().then()
    }, [restaurantId]);

    if (isLoading) {
        return (
            <CenteredView>
                <Spinner size='xl'/>
            </CenteredView>
        )
    }

    if (!isLoading && error) {
        return (
            <CenteredView>
                <Text>Some errors occurred!</Text>
            </CenteredView>
        )
    }

    if (Object.keys(restaurant).length === 0 && restaurant.constructor === Object) {
        return (
            <CenteredView>
                <Text>No data found!</Text>
            </CenteredView>
        )
    }
    console.log(restaurant)
    return (
        <Layout>
            <Flex>
                <Box w={'50%'} p={10} overflow='hidden'>
                    <Image w={'auto'} minH={400} borderRadius={'10px'}
                           fallbackSrc="https://via.placeholder.com/300x200.png?text=Coming+Soon"
                           src={restaurant.featured_image}
                           objectFit='cover'/>
                </Box>
                <Box w={'50%'} p={10}>
                    <Heading fontWeight="semibold" marginY="1">{restaurant.name}</Heading>
                    <Box d="flex" mt="2" alignItems="center">
                        {Array(5)
                            .fill("")
                            .map((_, i) => (
                                <StarIcon
                                    marginX={'2px'}
                                    key={i}
                                    boxSize={5}
                                    color={i < restaurant?.user_rating?.aggregate_rating ? "teal.500" : "gray.300"}
                                />
                            ))}
                        <Box as="span" ml="2" color="gray.600" fontSize="sm">
                            {restaurant?.user_rating?.votes} votes
                        </Box>
                    </Box>
                    <Box mt={5}>
                        {
                            restaurant.average_cost_for_two > 0 ? (<><Text fontSize='32px'
                                                                           as='span'>₹ {restaurant.average_cost_for_two}</Text>
                                <Box as="span" color="gray.600" fontSize="sm"> avg. cost for
                                    two</Box></>) : 'No info available'
                        }
                    </Box>
                    <Box mt={5}>
                        <Text color="gray.600" fontSize={18} marginY={1}><Box as='span'
                                                                              fontWeight={600}>Timings: </Box>{restaurant.timings}
                        </Text>
                        <Text color="gray.600" fontSize={18} marginY={1}><Box as='span'
                                                                              fontWeight={600}>Address: </Box>{restaurant?.location?.address}
                        </Text>
                    </Box>
                    <Box mt={5}>
                        <Button as={Link} href={restaurant.url}>Book Now</Button>
                    </Box>
                </Box>
            </Flex>
        </Layout>
    )
};

export default Restaurant;
