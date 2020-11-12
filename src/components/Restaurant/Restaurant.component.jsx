import React from "react";
import {
    Box,
    Image,
    Badge
} from '@chakra-ui/core'
import {StarIcon} from '@chakra-ui/icons'
import {Link} from "react-router-dom";

const Restaurant = ({imageUrl, name, id, votes, location, url, user_rating, timings, price}) => {
    return (
        <Link to={`/restaurant/${id}`}>
            <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden">
                <Box minH={200} height={200}>
                    <Image src={imageUrl} height={200} width='100%' fallbackSrc="https://via.placeholder.com/300x200.png?text=Coming+Soon" alt={name} objectFit="cover"/>
                </Box>
                <Box p="6">
                    <Box
                        marginY="1"
                        fontWeight="semibold"
                        as="h3"
                        lineHeight="tight"
                        isTruncated
                    >
                        {name}
                    </Box>

                    <Box>
                        {
                            price > 0 ? (<>₹ {price} <Box as="span" color="gray.600" fontSize="sm"> for two</Box></>) : 'No info available'
                        }
                    </Box>

                    <Box d="flex" mt="2" alignItems="center">
                        {Array(5)
                            .fill("")
                            .map((_, i) => (
                                <StarIcon
                                    marginX={'1px'}
                                    key={i}
                                    color={i < user_rating ? "teal.500" : "gray.300"}
                                />
                            ))}
                        <Box as="span" ml="2" color="gray.600" fontSize="sm">
                            {votes} votes
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Link>
    )
}

export default Restaurant;
