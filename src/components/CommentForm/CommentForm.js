import React from 'react'
import { Wrapper,ImageBox,Image,CommentArea,ReplyButton,Form } from './index';
import { useState } from 'react';

const CommentForm = ({user,commentUser,mode,add,setClose}) => {
    const [newComment,setNewComment] = useState(`@${commentUser}`)
    const [id,setId] = useState(0);
    const getId = ()=>{
         setId(id + 1)
    }
    const  createdComment = {
        "id": id,
        "content": newComment,
        "createdAt": "2 weeks ago",
        "score": 5,
        "user": {
          "image": { 
            "png": user.image.png,
            "webp":  user.image.webp,
          },
          "username":  user.username,
        }
    }
  
    const getAdd = ()=>{
        add(createdComment)
        setClose(false)

    }
    


 
    const getComment = (e)=>{
        let value = e.target.value
        setNewComment(value)         
    }

    return (
        <Wrapper mode={mode}>
            <ImageBox>
                <Image src={user.image.png} />
            </ImageBox>
            <Form >
              <CommentArea value={createdComment.content}  onChange={(e)=>getComment(e)} />
            </Form>
            <ReplyButton type="submit" onClick={getAdd}  >Reply</ReplyButton>
        </Wrapper>
    )
}

export default CommentForm
