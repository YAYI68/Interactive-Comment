import React,{ useState,useContext  } from 'react';
import { Container,CommentHeader,CommentBox ,Content,
    CommentAvatar,ReplyBox,ImageBox,Image,CommentName,Duration,ReplyIcon,ReplyWord} from './index';
    import { SideButton } from './SideButton';
import styled from 'styled-components';
import { respond } from '../responsive';
import CommentForm from '../CommentForm/CommentForm';
import { AppData } from '../../App';




const Wrapper = styled.div`
   width: 70%;
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



const Reply = ({reply}) => {
    const {allComments} = useContext(AppData)
    const currentUser = allComments.currentUser
    const [close,setClose] = useState(false)
    return (
        <>
        <Wrapper>
        <SideButton />
        <Container>
        <CommentHeader>
            <CommentAvatar>
               <ImageBox>
                 <Image src={reply?.user.image.png} />
               </ImageBox>
               <CommentName>
                   {reply?.user.username}
                </CommentName>
                <Duration>
                {reply?.createdAt}
                </Duration>
            </CommentAvatar>
            <ReplyBox onClick={()=>setClose(!close)}>
                <ReplyIcon />
                <ReplyWord >Reply</ReplyWord>
            </ReplyBox>
        </CommentHeader>
        <CommentBox>
         <Content>
         {reply?.content}
         </Content>
        </CommentBox>
        </Container>
    </Wrapper>
    {close && <CommentForm mode="reply" user={currentUser}  commentUser={reply?.user.username} /> }
    </>
    )
}

export default Reply
