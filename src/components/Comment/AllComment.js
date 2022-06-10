import styled from 'styled-components'
import Comment from './Comment';
import CommentForm from '../CommentForm/CommentForm';
import EditForm from '../EditForm/EditForm';
import { respond } from '../responsive';
import { useEffect, useState,useContext} from 'react';
import { AppData } from '../../App';
import Reply from './Reply';


const x = {
    id:1
}
let y = JSON.stringify(x)
localStorage.setItem('my',y)
// console.log(CommentData.comments)


const Container = styled.div`
margin: 0 auto;
 width: 50vw;
 display: flex;
 flex-direction: column;
 box-sizing: border-box;
 ${respond('phone')}{
     width: 90vw;
 }

`


const AllComment = () => {
    const {allComments} = useContext(AppData)
    const [comments,setComments ] = useState([])
    const [reply,setReply ] = useState([])
    const [open,setOpen] = useState(true)
    useEffect(() => {
        setComments(allComments.comments)
    }, []);

    useEffect(() => {
        comments.map(comment=>{
            comment.replies && setReply(comment.replies)      
        })
    },[comments])

    const addComment=(comment)=>{
        setComments([...comments,comment])     
    }

    const removeComment = (commentId)=>{

    }
  
    return (
        <Container>
            {comments.map((data,index)=><Comment key={index} comment = {data} add={addComment}   />
            )}                                

            {reply.map((data,index)=><Reply key={index} reply={data} />
            )}               

        </Container>
    )
}

export default AllComment
