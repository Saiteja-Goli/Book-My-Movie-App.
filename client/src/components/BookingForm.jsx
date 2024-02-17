import React, { useContext, useState } from 'react';
import { FormControl, FormLabel, Input, Select, Button, Box, useToast } from '@chakra-ui/react';
import Store from '../context/myContext';

function BookingForm({ onBooking }) {

    const { email } = useContext(Store)
    const [name, setName] = useState('');
    const [numTickets, setNumTickets] = useState(1);
    const toast = useToast();



    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && numTickets) {
            const bookingDetails = { name, numTickets, email };
            saveBookingToLocalStorage(bookingDetails);
            onBooking(bookingDetails);
            toast({
                title: 'Booked',
                description: "Tickets Booked Successfully.",
                status: "success",
                duration: 5000,
                isClosable: true,
            });
            setName('');
             window.location.reload();
        }
    };
    const saveBookingToLocalStorage = (bookingDetails) => {
        let userDetails = JSON.parse(localStorage.getItem("userDetails")) || { bookings: [] };
        userDetails.bookings.push(bookingDetails); // Append new booking details
    
        localStorage.setItem("userDetails", JSON.stringify(userDetails));
    };

    return (
        <form onSubmit={handleSubmit} >
            <Box boxShadow="base" p='6' rounded='md'>
                <FormControl isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} required />
                </FormControl>
                <FormControl mt={4}>
                    <FormLabel>Number of Tickets</FormLabel>
                    <Select value={numTickets} onChange={(e) => setNumTickets(parseInt(e.target.value))}>
                        {[...Array(8).keys()].map((num) => (
                            <option key={num} value={num + 1}>
                                {num + 1}
                            </option>
                        ))}
                    </Select>
                </FormControl>
                <Button mt={4} colorScheme="blue" type="submit" disabled={!name}>
                    Book
                </Button>
            </Box>
        </form>
    );
}

export default BookingForm;
