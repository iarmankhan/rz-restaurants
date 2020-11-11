import React from "react";
import {Box} from '@chakra-ui/core'

const Layout = ({children}) => {
    return (
        <Box maxW={1200} marginTop={5} marginX='auto'>
            {children}
        </Box>
    )
};

export default Layout;
