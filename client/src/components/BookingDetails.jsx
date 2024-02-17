import React, { useContext, useEffect, useState } from 'react';
import { Box, Table, Thead, Tbody, Tr, Th, Td, Center, Heading } from '@chakra-ui/react';
import Store from '../context/myContext';

const BookingDetails = () => {
    const { email } = useContext(Store);
    const [bookings, setBookings] = useState([]);


    useEffect(() => {
        // Retrieve user details from localStorage
        const userDetails = JSON.parse(localStorage.getItem("userDetails")) || { bookings: [] };
        console.log("User Details: ", userDetails.bookings);
        console.log(email, "email");
        // Filter bookings based on user's email
        const userBookings = userDetails.bookings.filter(booking => booking.email === email);
        setBookings(userBookings.reverse());
    }, [email]);

    useEffect(() => {
        console.log("Updated bookings:", bookings);
    }, [bookings]);

    const totalBookedSeats = bookings.reduce((acc, curr) => acc + (curr.numTickets || 0), 0);


    const totalAvailableSeats = 46 - totalBookedSeats;

    return (
        <>
            <Center mt={10}>
                <Box mt="4" mr={2} p="2" bg="blue.200" borderRadius="md">
                    <p>Booked Seats: {totalBookedSeats}</p>
                </Box>
                <Box mt="4" p="2" bg="green.200" borderRadius="md">
                    <p>Available Seats: {totalAvailableSeats}</p>
                </Box>
            </Center>

            <Center>
                <Box
                    className="booking-details"
                    border="1px solid #ccc"
                    w="50%"
                    boxShadow="inherit"
                    p="6"
                    rounded="md"
                    bg="white"
                    borderRadius="5px"
                    mt="20px"
                >
                    <Heading as="h2" mb="4" size="md" textAlign="center">
                        Booking Details
                    </Heading>


                    <Table variant="simple" mt={10}>
                        <Thead>
                            <Tr>
                                <Th>Username</Th>
                                <Th>Selected Seats</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {bookings.map((booking, index) => (
                                <Tr key={index}>
                                    <Td>{booking.name}</Td>
                                    <Td>{booking.numTickets}</Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </Box >
            </Center>
        </>
    );
};

export default BookingDetails;

