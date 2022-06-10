import styled from 'styled-components';
import React, { useContext } from 'react';
import { respond } from '../responsive';
import { AppData } from '../../App';


export const Wrapper = styled.div`
   position:fixed;
   width:100%;
   height:100%;
   background-color:rgba(0,0,0,0.5); 
   top: 0;
   left: 0;
   visibility:${props=>props.display=== "false" ? "hidden":"visible" } ;
`
export const BGContainer = styled.div`
   display:flex;
   width:100%;
   height:100%;
   justify-content: center;
   align-items: center;
`
export const Container = styled.div`
   display:flex;
   flex-direction: column;
   justify-content: space-between;
   width: 25vw;
   height:25vh;
   border-radius:10px;
   background-color:white;
   padding: 1rem 2rem;
   ${respond('phone')}{
       width: 90vw;
   }
   ${respond('tablet')}{
       width: 60vw;
   }
`

export const DeleteHeader = styled.h1`
 font-size:2rem;
`

export const DeleteContent = styled.p`
font-size: 1.3rem;
color:gray;
`
export const DeleteButtonBox = styled.div`
display: flex;
justify-content: space-between;
width:100%;
`
export const Button = styled.button`
height: 3rem;
flex-basis: 40%;
background-color:${props=>props.color};
color:white;
font-size: 1.2rem;
font-weight: bold;
border-radius: 10px;
border: unset;
cursor: pointer;
&:active{
    transform: translateY(2px);
}
`


const Display = () => {
    const {show,setShow} = useContext(AppData)
    const handleClick = () =>{
        setShow(!show);
    }
    return (
       <Wrapper onClick={handleClick} display={show.toString()}>
           <BGContainer>
              <Container>
                  <DeleteHeader>Delete Comment</DeleteHeader>
                  <DeleteContent> Are you sure you want to delete this comment?.This will remove the comment and can't be undone</DeleteContent>
                  <DeleteButtonBox>
                    <Button onClick={handleClick} color="gray">No, Cancel</Button>
                    <Button onClick={handleClick} color="red">Yes, Delete</Button>
                  </DeleteButtonBox>    
              </Container> 
           </BGContainer>
       </Wrapper>
    )
}

export default Display



