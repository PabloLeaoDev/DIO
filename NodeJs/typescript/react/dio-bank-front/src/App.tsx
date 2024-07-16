import { Layout } from './components/Layout';
import { 
  ChakraProvider,
  Input,
  Box,
  Center,
  Button
} from '@chakra-ui/react'
import { login } from './services/login';

function App() {
  return (
    // o "React.Fragment" (<></>) é útil para não ferir o princípio de retornar apenas um elemento, então para não termos que criar o elemento que será lido pelo servidor, essa propriedade agrupa o que iremos retornar sem ser lido, ou seja, não afeta a peformance.
    <ChakraProvider>
      <Box minHeight='100vh' backgroundColor='blue' padding='25px'>
        <Box backgroundColor='white' borderRadius='10px' padding='10px'>
          <Center>
            <h1>Faça Login</h1>
          </Center>
          <Input placeholder='email' />
          <Input placeholder='password' />
          <Center>
            <Button colorScheme='teal' size='sm' marginTop='10px' width='100%' onClick={login}>
              Button
            </Button>
          </Center>
          
        </Box>    
      </Box>
    </ChakraProvider>
  );
}

export default App;
