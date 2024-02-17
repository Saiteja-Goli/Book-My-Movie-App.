import React from 'react';
import { Box, Heading } from '@chakra-ui/react';

const Navbar = () => {
    return (
        <Box
            backgroundColor="purple.500"
            p={4}
            position="fixed"
            width="100%"
            top="0"
            zIndex="1000"
            boxShadow="md"
            borderBottom="1px solid"
            borderColor="purple.600"
        >
            <Heading color="white" textAlign="center" fontSize="xl">Book Movie Tickets</Heading>
        </Box>
    );
}

export default Navbar;
