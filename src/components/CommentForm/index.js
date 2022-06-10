import styled from 'styled-components';
import { respond } from '../responsive';



   export const Wrapper = styled.div`
    width:${props=>props.mode==="comment"? "100" :"70"}% ;
    border-radius: 10px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    margin-top: 2rem;
    padding: 2rem;
    align-self: flex-end;
    ${respond('phone')}{
       flex-direction: column;
       width: 90%;
       position: relative;
       align-self:flex-start;
    }

`

export const ImageBox = styled.div`
   width: 2rem;
   height: 2rem;
   ${respond('phone')}{
    order: 2;
   align-self: flex-start;
   position: absolute;
   left: 1rem;
   bottom: 2rem;
   }
   
   
`
export const Image = styled.img`
 width: 100%;
 object-fit: cover;
`
export const Form = styled.form`
flex-basis:80%;
`
export const CommentArea = styled.textarea`
width: 100%;
height: 90%;
border-radius: 10px;
font-size: 1rem;
padding: .5rem;
${respond('phone')}{
    width: 100%;
    height: 100%;
}
font-size:1rem;
color:black;
font-weight:bold;
`
export const ReplyButton = styled.button`
   width: 5rem;
    height:3rem;
    color: white;
    margin-left: 1rem;
    background-color:blue;
    border-radius: 10px; 
    cursor: pointer;
    border: unset;
    ${respond('phone')}{
        /* height:10rem; */
        align-self: flex-end;
        margin-right: 2rem;
        margin-top: .5rem;
        order: 2;
        width: 4rem;
        height:2.5rem;

    }
    &:hover{
        opacity:.3;
    } 
    &:active{
        transform: translateY(2px);
    }
`
