import React, {useState} from "react";
import {Box, Flex, Grid, Input, Text} from '@chakra-ui/core'
import Layout from "../../components/Layout/Layout.component";
import City from "../../components/City/City.component";
import initialCities from "../../redux/cities";
import constants from "../../constants/constants";

const Home = () => {
    const [cities, setCities] = useState(initialCities);
    const [search, setSearch] = useState('');

    const searchCity = async (e) => {
        const val = e.target.value;
        setSearch(val)

        if (val.length === 0) {
            setCities(initialCities)
        }

        if (val.length > 2) {
            const response = await fetch('https://developers.zomato.com/api/v2.1/cities?q=' + val, {
                method: 'GET',
                headers: {
                    "Accept": "application/json",
                    "user-key": constants.API_KEY
                }
            });
            const data = await response.json();

            if (data?.location_suggestions) {
                const results = {}
                data.location_suggestions.forEach(location => results[location.id] = location.name)

                setCities(results)
            }
        }
    }

    return (
        <Layout>
            <Box>
                <Input value={search} onChange={searchCity} placeholder="Search Cities..." variant='filled'/>
            </Box>
            {
                Object.keys(cities).length > 0 ?
                    (
                        <Grid marginY={5} templateColumns="repeat(4, 1fr)" gap={3}>
                            {
                                Object.keys(cities).map(city => <City key={city} name={cities[city]} id={city}/>)
                            }
                        </Grid>
                    )
                    : (<Flex align='center' margin={10} justify='center'>No Cities Found!</Flex>)
            }
        </Layout>
    )
};

export default Home;
