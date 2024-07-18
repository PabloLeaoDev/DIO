import { Header } from '../components/Header/Header';
import { 
    ChakraProvider,
    Input,
    Box,
    Center,
    Button
} from '@chakra-ui/react'
import { login } from '../services/login';
import './card.css';

export const Card = () => {
    return (
        <ChakraProvider>
            <Box minHeight='100vh' backgroundColor='#319795' padding='25px'>
                <Header>
                    Fomulário
                </Header>
                <Box className='container'>
                    <Center>
                        <h1>Login</h1>
                    </Center>
                    <Center>
                        <Input placeholder='email' className='input' />
                    </Center>
                    <Center>
                    <Input placeholder='password' className='input' />
                    </Center>
                    <Center>
                        <Button colorScheme='teal' size='sm' className='btn' onClick={login}>
                            Entrar
                        </Button>
                    </Center>
                </Box>    
            </Box>
        </ChakraProvider>
    )
}