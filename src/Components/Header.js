import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import {selectCars} from "../features/car/carSlice";
import { useSelector } from "react-redux";

function Header() {

  const [state  , setState] = useState(false);
  const cars = useSelector(selectCars);
  console.log(cars);

  function handleClick() {
      setState(true);
  }

  function handleClick2() {
    setState(false)
  }

  
  return (
    <Container>
        <a>
          <img src="/images/logo.svg"></img>
        </a>

        <Menu>
            {cars && cars.map( (car , index) => {
              return <a href="#">{car}</a>
            } )}
        </Menu>

        <RightMenu>
          <a href="#">Shop</a>
          <a href="#">tesla account</a>
          <CustomMenu  onClick={handleClick}/>
        </RightMenu>
        <BurgerNav show = {state}>
          <CustomWrap >
            <CustomClose onClick={handleClick2}/>
          </CustomWrap>
          {cars && cars.map( (car , index) => {
              return <li><a href="#">{car}</a></li>
            } )}
          <li><a href="#">Existing Inventory</a></li>
          <li><a href="#">Used Inventory</a></li>
          <li><a href="#">Trade In</a></li>
          <li><a href="#">Cyber Truck</a></li>
          <li><a href="#">Roadaster</a></li>
        </BurgerNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
    min-height:60px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding : 0 20px;
    position : fixed;
    top : 0;
    left : 0;
    right :0;
    z-index : 1;
`

const Menu = styled.div`
    display : flex;
    justify-content : center;
    align-items : center; 
    flex:1;

  
    a {
      font-weight: 600;
      padding : 0 10px;
      text-transform : uppercase;
      flex-Wrap : nowrap;
    }

    @media (max-width : 768px) {
      display : none;
    }
`

const RightMenu = styled.div`
    display:flex;
    align-items:center;
    a {
      font-weight: 600;
      margin-right : 10px;
      text-transform : uppercase;
    }
    
`

const CustomMenu = styled(MenuIcon)`
    cursor:pointer;
`

const BurgerNav = styled.div`
    background:white;
    position : fixed;
    top : 0;
    right : 0;
    bottom : 0;
    width : 300px;
    display:flex;
    flex-direction:column;
    text-align:start;
    list-style : none;
    padding : 20px;
    transform : ${props => props.show ? "translateX(0)" : "translateX(100%)"};
    transition : transform 0.2s ease-in;

    li {
      padding : 15px 0;
      border-bottom : 1px solid rgba(0,0,0,.2);

      a{
        font-weight : 600;
      }
    }

`
const CustomClose = styled(CloseIcon)`
    cursor : pointer;
`

const CustomWrap = styled.div`
    display:flex;
    justify-content:flex-end;
`