import React from 'react';
import {Flex, Heading} from '@chakra-ui/core'
import {ColorModeSwitcher} from "../Theme/ColorModeSwitcher";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <Flex padding={4} borderBottom='1px'  align='center' justify='space-between'>
            <Link to={'/'}><Heading as='h3'>Zomato</Heading></Link>
            <ColorModeSwitcher />
        </Flex>
    )
};

export default Header
