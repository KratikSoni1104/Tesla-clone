import React from 'react'
import styled from "styled-components";
import Section from "./Section";
import cars from "./cars";

function Homepage() {
  return (
    <Container>

      {cars.map( car => {
        return( <Section 
          title={car.title}
          img = {car.img}
          des = {car.des}
          lbt = {car.leftBtnText}
          rbt = {car.rightBtnText}
        />)
      } ) }
    </Container>
  )
}

export default Homepage

const Container = styled.div`
    height : 100vh;
`