import React from "react";
import {Flex, Heading} from '@chakra-ui/core'
import {Link} from 'react-router-dom';

const City = ({name, id}) => {
    return (
        <Link to={id}>
            <Flex margin={3} align='center' justify='center' backgroundColor="#ccc" width="300px" height="100px"
                  borderRadius="10px">
                <Heading as='h3'>{name}</Heading>
            </Flex>
        </Link>
    )
}

export default City
