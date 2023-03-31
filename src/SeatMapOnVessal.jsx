import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, Container } from "@mui/material";
import { Col, Div } from "react-bootstrap";
const seatsData = [
  {
    id: "64268b127bad00665af5d919",
    seatBooked: false,
    col: 1
  },
  {
    id: "64268b1243c96c3114d767c1",
    seatBooked: false,
    col: 2
  },
  {
    id: "64268b12abad2643d970bf6a",
    seatBooked: false,
    col: 3
  },
  {
    id: "64268b1291a20ab60d14f41d",
    seatBooked: true,
    col: 4
  },
  {
    id: "64268b12a4bc9285653a62e2",
    seatBooked: false,
    col: 5
  },
  {
    id: "64268b12909bc21eecadc2e3",
    seatBooked: true,
    col: 6
  },
  {
    id: "64268b1224c8a10adfaed1ba",
    seatBooked: false,
    col: 7
  },
  {
    id: "64268b123ef491c07b15eb82",
    seatBooked: false,
    col: 8
  },
  {
    id: "64268b1248dfaf162f21a082",
    seatBooked: true,
    col: 9
  }
];

const SeatMapOnVessal = () => {
  const [seats, setSeats] = useState(seatsData);
  // const updateSet = () => {
  //   setSeats({seats.seatBooked === false})
  // };
  return (
    <Container>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        {seats.map((item, index) => {
          return (
            <Col md={4} key={`${item.col}`}>
              <Button
                size="large"
                color="primary"
                disabled={item.seatBooked ? true : false}
              >
                {item.col}
              </Button>
            </Col>
          );
        })}
      </ButtonGroup>
    </Container>
  );
};
export default SeatMapOnVessal;
