
import {Wrapper, Container,CommentHeader,CommentBox ,Content,
    CommentAvatar,ReplyBox,ImageBox,Image,CommentName,Duration,ReplyIcon,ReplyWord} from './index';
import { SideButton } from './SideButton';
import { AppData } from '../../App';
import { useContext,useState } from 'react';
import CommentForm from '../CommentForm/CommentForm';
import EditForm from '../EditForm/EditForm';
import EditButton from '../EditForm/EditButton';



const Comment = ({comment,add}) => {
    const {allComments,setShow} = useContext(AppData)
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
                     <Image src={comment?.user.image.png} />
                   </ImageBox>
                   <CommentName>
                       {comment?.user.username}
                    </CommentName>
                    <Duration>
                    {comment?.createdAt}
                    </Duration>
                </CommentAvatar>
                {currentUser.username ===comment?.user.username? 
                  <EditButton setClose={setClose} close={close} setShow={setShow} />: <ReplyBox onClick={()=>setClose(!close)}>
                  <ReplyIcon />
                  <ReplyWord >Reply</ReplyWord>
              </ReplyBox>
              }              
            </CommentHeader>
            <CommentBox>
             <Content>
             {comment?.content}
             </Content>
            </CommentBox>
            </Container>
        </Wrapper>
        {close && currentUser.username ===comment?.user.username? <EditForm comments={comment} user={currentUser} />:"" }
        {close && <CommentForm add={add} mode="comment" user={currentUser}  commentUser={comment?.user.username} setClose={setClose} /> }
        </>
    )
}

export default Comment
