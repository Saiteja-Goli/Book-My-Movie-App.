import React, { useContext, useState } from 'react';
import BookingDetails from './BookingDetails';
import BookingForm from './BookingForm';
import { Center, HStack } from '@chakra-ui/react';
import SeatingArrangement from './SeatingArrangement';

const Movies = () => {
    const [bookings, setBookings] = useState([]);
    const [selectedSeats, setSelectedSeats] = useState([]);

    // Placeholder for bookedSeats and blockedSeats
    const bookedSeats = ['A1', 'B2']; // Example of booked seats
    const blockedSeats = ['C3', 'D4']; // Example of blocked seats
    const handleBooking = (booking) => {
        setBookings([...bookings, booking]);
        setSelectedSeats([]);
    };

    const handleSeatSelection = (seat) => {
        const index = selectedSeats.indexOf(seat);
        if (index === -1) {
            setSelectedSeats([...selectedSeats, seat]);
        } else {
            setSelectedSeats(selectedSeats.filter((selectedSeat) => selectedSeat !== seat));
        }
    };

    return (
        <div>
            <Center>
                <HStack spacing='150px'>
                    <SeatingArrangement
                        selectedSeats={selectedSeats}
                        onSelectSeat={handleSeatSelection}
                        bookedSeats={bookedSeats}
                        blockedSeats={blockedSeats}
                    />
                    <BookingForm onBooking={handleBooking} />
                </HStack>
            </Center>
            <BookingDetails bookings={bookings} />
        </div>
    );
};

export default Movies;
