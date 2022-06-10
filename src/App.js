import styled, { createGlobalStyle } from 'styled-components'
import { createContext, useState } from 'react';
import AllComment from './components/Comment/AllComment';
import Display from './components/Display/Display';
import commentData from './data.json';


let allComments = commentData


export const AppData = createContext()


const GlobalStyle = createGlobalStyle`
    body{
      background-color: white;
    }
`

const Container = styled.div`
 width: 100%;
 height: 100%;
 background-color: aliceblue;
 display:flex;
 flex-direction:column;
`


function App() {
  const [show,setShow] = useState(false);
  const val= {
    show,
    setShow,
    allComments
  }

  return (
    <>
    <AppData.Provider  value={val} >
      <Container>
        <AllComment />
      </Container>
      <Display />
    </AppData.Provider>
    </>
  );
}

export default App;
