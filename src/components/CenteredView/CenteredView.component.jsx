import React from "react";
import {Flex} from "@chakra-ui/core";

const CenteredView = ({children}) => {
    return (
        <Flex w="100%" minH="100vh" align='center' justify='center'>
            {children}
        </Flex>
    )
};

export default CenteredView;
