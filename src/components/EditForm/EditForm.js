import React, { useContext } from 'react';
import {Wrapper, Container,CommentHeader,CommentArea,ReplyButton,CommentAvatar,ImageBox,Image,CommentName,Duration,User} from './index';
import { SideButton } from '../Comment/SideButton';
import EditButton from './EditButton';
import { AppData } from '../../App';




const EditForm = ({ setDisplay,user,comments}) => {
    const {setShow} = useContext(AppData)
    const deleteClick= () =>{
        setShow(true)
    }
    
    return (
        <Wrapper>
        <SideButton />
        <Container>
        <CommentHeader>
            <CommentAvatar>
               <ImageBox>
                 <Image src={user.image.png} />
               </ImageBox>
               <CommentName>
                   {user.username}
                </CommentName>
                <User>you</User>
                <Duration>
                    1 month ago
                </Duration>
            </CommentAvatar>
            
            <EditButton delete={deleteClick} />
        </CommentHeader>
        <CommentArea value={comments.content} /> 
        <ReplyButton>Update</ReplyButton> 
        </Container>
    </Wrapper>
    )
}

export default EditForm
