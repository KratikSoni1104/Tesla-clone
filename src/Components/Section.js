import React from 'react'
import styled from "styled-components";
import { Slide } from 'react-awesome-reveal';

function Section(props) {

  return (
    <Wrap bgImg = {props.img}>
        <Slide direction="up">
          <ItemText>
            <h1>{props.title}</h1>
            <p>{props.des}</p>
          </ItemText>
        </Slide>
        <Buttons>
          <Slide direction="up">
            <ButtonGroup>
              <LeftButton>
                  {props.lbt}
              </LeftButton>
              { props.rbt && <RightButton>
                  {props.rbt}
              </RightButton>}
            </ButtonGroup>
          </Slide>
          <DownArrow src="/images/down-arrow.svg"></DownArrow>
        </Buttons>
        
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
    width : 100vw;
    height : 100vh;
    background-size : cover;
    background-position : center;
    background-repeat : no-repeat;
    background-image: url('/images/model-s.jpg');
    display:flex;
    flex-direction : column;
    justify-content : space-between;
    background-image: ${props => `url("/images/${props.bgImg}")`};
`

const ItemText = styled.div`
    padding-top : 15vh;
    text-align : center;
`

const ButtonGroup = styled.div`
    display:flex;
    justify-content: center;
    margin-bottom : 30px;

    @media (max-width:768px){
      display:flex;
      flex-direction:column;
      align-items:center;
    }
`
const LeftButton = styled.div`
    background-color : rgba(23,26,32,0.8);
    height :40px;
    width : 256px;
    color : white;
    text-transform : uppercase;
    font-size: 12px;
    border-radius : 100px;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor : pointer;
    opacity : 0.8;
    margin:8px;
`

const RightButton = styled(LeftButton)`
    background-color : white;
    opacity : 0.65;
    color : black;
`

const DownArrow = styled.img`
    height:40px;
    margin:20px;
    overflow-x : hidden;
    animation : animateDown infinite 1.5s;
`

const Buttons = styled.div`

`