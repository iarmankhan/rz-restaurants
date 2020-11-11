import React from 'react';
import {Flex, Heading} from '@chakra-ui/core'
import {ColorModeSwitcher} from "../Theme/ColorModeSwitcher";

const Header = () => {
    return (
        <Flex padding={4} borderBottom='1px'  align='center' justify='space-between'>
            <Heading as='h3'>Zomato</Heading>
            <ColorModeSwitcher />
        </Flex>
    )
};

export default Header
