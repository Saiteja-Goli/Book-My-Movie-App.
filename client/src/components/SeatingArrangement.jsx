import React, { useState } from 'react';
import { Box, Button, Flex } from '@chakra-ui/react';

function SeatingArrangement({ selectedSeats, onSelectSeat }) {
  const rows = ['A', 'B', 'C', 'D', 'E', 'F'];
  const seatsPerRow = [8, 8, 8, 8, 8, 6];
  const [bookedSeats, setBookedSeats] = useState([]); // State to keep track of booked seats

  const isSeatBooked = (row, seat) => {
    return bookedSeats.includes(`${row}${seat}`);
  };

  const handleSeatClick = (row, seat) => {
    const seatId = `${row}${seat}`;
    if (!selectedSeats.includes(seatId)) {
      onSelectSeat(seatId);
      setBookedSeats([...bookedSeats, seatId]); // Add the booked seat to the state
    }
  };

  return (
    <Box mt={8}>
      {rows.map((row, rowIndex) => (
        <Box key={row} mb={2}>
          {Array(seatsPerRow[rowIndex]).fill().map((_, seatIndex) => {
            const seatNumber = seatIndex + 1;
            const seatId = `${row}${seatNumber}`;
            const isSeatSelected = selectedSeats.includes(seatId);
            const isBooked = isSeatBooked(row, seatNumber);
            const bgColor = isSeatSelected ? 'red' : (isBooked ? 'red' : 'teal');

            return (
              <Button
                key={seatIndex}
                disabled={isBooked}
                onClick={() => handleSeatClick(row, seatNumber)}
                bg={bgColor}
                color="white"
                mr={2}
              >
                {seatId}
              </Button>
            );
          })}
        </Box>
      ))}
      <Flex justify="center" mt={7}>
        <Box w="100px" h="30px" bg="red" mr={4} borderRadius="md" textAlign="center" lineHeight="30px">Booked</Box>
        <Box w="100px" h="30px" bg="teal" borderRadius="md" textAlign="center" lineHeight="30px">Available</Box>
      </Flex>
    </Box>
  );
}

export default SeatingArrangement;
