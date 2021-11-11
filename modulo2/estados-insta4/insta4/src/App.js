import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <div>
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
         <Post
          nomeUsuario={'Ana'}
          fotoUsuario={'https://picsum.photos/id/1011/367/267'}
          fotoPost={'https://picsum.photos/id/367/367/267'}
        />
         <Post
          nomeUsuario={'Catarina'}
          fotoUsuario={'https://picsum.photos/id/399/367/267'}
          fotoPost={'https://picsum.photos/id/274/367/267'}
        />
      </MainContainer>
    </div>
    );
  }
}

 export default App;


