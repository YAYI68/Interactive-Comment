
import styled from 'styled-components';
import { FaPen } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';
import { respond } from '../responsive';


export const Wrapper = styled.div`
    width: 100%;
    border-radius: 10px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin-top: 2rem;
    padding: 1rem;
    
    ${respond('phone')}{
       position: relative;
       flex-direction: column;
       width: 90%;
       position: relative;
    }

`

export const Container = styled.div`
   flex-basis:90%;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   ${respond('phone')}{
       width: 100%;
   }
`
export const CommentHeader = styled.div`
     flex: 1;
     display: flex;
     justify-content: space-between;
     ${respond('phone')}{
     width: 100%;
     
}
`

export const CommentAvatar = styled.div`
flex-basis:30%;
display: flex;
justify-content: space-between;
align-items: center;
${respond('phone')}{
   flex-basis: 70%;
   justify-content: space-between;
}

`
export const ImageBox = styled.div`
   width: 2rem;
   height: 2rem;
`
export const Image = styled.img`
 width: 100%;
 object-fit: cover;
`

export const CommentName = styled.p`
   font-size: 1rem;
   color: black;
   font-weight: bold;
`
export const User = styled.p`
  background-color:blue;
  color: white;
  padding:0 5px;
`
export const Duration = styled.p`
  color: gray;
  font-size: .8rem;
`

export const Box = styled.div`
flex-basis: 20%;
display: flex;
justify-content: space-between;
align-items: center;
cursor: pointer;
${respond('phone')}{
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    z-index: 1;
}

`
export const EditBox = styled.button`
flex-basis: 40%;
display: flex;
align-items: center;
margin-right: 5px;
border: unset;
background-color:transparent;
cursor: pointer;
  &:active{
        transform:translateY(1px)
    }
`
export const DeleteIcon = styled(FaTrash)`
    color:red;
    margin-right: 5px; 
`
export const EditIcon = styled(FaPen)`
    color:blue;
    margin-right: 5px;
    
`
export const EditWord = styled.p`
     font-size: 1rem;
     color: ${props=>props.color};   
`

export const CommentArea = styled.textarea`
width: 95%;
height: 90%;
border-radius: 10px;
font-size: 1rem;
padding: .5rem;
margin: 1rem 0;
`
export const ReplyButton = styled.button`
    width: 5rem;
    height: 3rem;
    color: white;
    font-size:1rem;
    font-weight:bold;
    background-color:blue; 
    border-radius: 10px; 
    cursor: pointer;
    border: unset;
    align-self: flex-end;
    margin-top:.5rem;
    ${respond('phone')}{
        position: absolute;
        bottom: 1rem;
        right: 1rem;
        visibility: hidden;
    }

    &:hover{
        opacity:.3;
    } 
    &:active{
        transform: translateY(2px);
    }
`

