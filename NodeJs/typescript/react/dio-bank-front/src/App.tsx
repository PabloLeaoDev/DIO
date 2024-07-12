import { Layout } from './components/Layout';
import styled from 'styled-components';

const Box = styled.div`
  background-color: orange;
`;

function App() {
  return (
    // o "React.Fragment" (<></>) é útil para não ferir o principio de retornar apenas um elemento, então para não termos que criar o elemento que será lido pelo servidor, essa propriedade agrupa o que iremos retornar sem ser lido, ou seja, não afeta a peformance.
    <Layout>
      <Box>
        <h1>Faça Login</h1>
      </Box>
      <label htmlFor='emailIn'>
        Email
      </label>
      <input type='email' id='emailIn' />
      <label htmlFor='pwIn'>
        Senha
      </label>
      <input type='password' id='pwIn' />
      <button>Entrar</button>
    </Layout>
  );
}

export default App;
