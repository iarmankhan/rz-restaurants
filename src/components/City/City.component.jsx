import React from "react";
import {Flex, Text, useColorMode} from '@chakra-ui/core'
import {Link} from 'react-router-dom';

const City = ({name, id}) => {
    const {colorMode} = useColorMode();
    return (
        <Link to={`/city/${id}`}>
            <Flex align='center' justify='center' borderWidth="1px"
                  bg={colorMode === 'dark' ? 'rgba(255,255,255,0.16)' : '#E2E8F0'} minH="100px"
                  borderRadius="10px">
                <Text fontSize="xl">{name}</Text>
            </Flex>
        </Link>
    )
}

export default City
