import React, {useState} from "react";
import {Box, Flex, Input} from '@chakra-ui/core'
import Layout from "../../components/Layout/Layout.component";
import City from "../../components/City/City.component";
import initialCities from "../../redux/cities";

const Home = () => {
    const [cities, setCities] = useState(initialCities);
    const [search, setSearch] = useState('');

    const searchCity = async (e) => {
        const val = e.target.value;
        setSearch(val)
        if (val.length > 2) {
            console.log(val)
        }
    }

    return (
        <Layout>
            <Box>
                <Input value={search} onChange={searchCity} placeholder="Search Cities..." variant='filled' />
            </Box>
            <Flex marginY={5} wrap={true}>
                {
                    Object.keys(cities).map(city => <City name={cities[city]} id={city}/>)
                }
            </Flex>
        </Layout>
    )
};

export default Home;
