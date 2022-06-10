import styled from 'styled-components';
import { FaReply } from 'react-icons/fa';
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
`
export const CommentHeader = styled.div`
     flex: 1;
     display: flex;
     justify-content: space-between;
`

export const CommentAvatar = styled.div`
flex-basis:30%;
display: flex;
justify-content: space-between;
align-items: center;
${respond('phone')}{
   flex-basis: 50%;
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
export const Duration = styled.p`
  color: gray;
  font-size: .8rem;
`

export const ReplyBox = styled.div`
flex-basis: 5%;
display: flex;
justify-content: space-between;
align-items: center;
cursor: pointer;
${respond('phone')}{
   position: absolute;
   right: 1rem;
   bottom: 1rem;
}
`
export const ReplyIcon = styled(FaReply)`
    color:blue;
    margin-right: 5px;
`
export const ReplyWord = styled.p`
     font-size: 1rem;
     color: blue;
`



 export const CommentBox = styled.div`
   width: 90%;
   margin: .5rem 0;
`

export const Content = styled.p`
   font-size: 1rem;
   word-wrap: break-word;
   color: gray;
`
