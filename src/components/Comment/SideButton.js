import styled from 'styled-components';
import  {FaPlus} from 'react-icons/fa';
import  {FaMinus}  from 'react-icons/fa';
import {respond } from '../responsive';


const Container = styled.div`
flex-basis:5%;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
background-color: aliceblue;
border-radius:10%;
padding: .5rem;
${respond('phone')}{
    order:1;
    align-self: flex-start;
    flex-direction: row;
    height: 3rem;
    width: 5rem;
    flex-basis:1rem;
    margin-top: .5rem;
}
`

const Button = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color:transparent;
border: unset;
&:active{
    transform: translateY(2px);
}
`

const Plus = styled(FaPlus)`
color: blue;
cursor: pointer;
font-size:10px;
`
const Minus = styled(FaMinus)`
color: blue;
cursor: pointer;
font-size:10px;
`
const Count = styled.p`
     color: blue;
     font-size: 1rem;
     font-weight: bold;
`

export const SideButton = () => {
    return (
        <Container>
            <Button>
            <Plus />
            </Button>
            <Count>
                12
            </Count>
            <Button>
            <Minus />
            </Button>

        </Container>      
    )
}

