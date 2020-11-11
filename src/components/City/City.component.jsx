import React from "react";
import {Flex, Text} from '@chakra-ui/core'
import {Link} from 'react-router-dom';
import {useColorMode} from '@chakra-ui/core'

const City = ({name, id}) => {
    const {colorMode} = useColorMode();
    return (
        <Link to={`/city/${id}`}>
            <Flex align='center' justify='center' bg={colorMode === 'dark' ? 'gray.400' : 'gray.300'} minH="100px"
                  borderRadius="10px">
                <Text fontSize="xl">{name}</Text>
            </Flex>
        </Link>
    )
}

export default City
