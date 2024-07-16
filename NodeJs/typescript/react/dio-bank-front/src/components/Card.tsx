import { Header } from '../components/Header/Header';
import { 
    ChakraProvider,
    Input,
    Box,
    Center,
    Button
} from '@chakra-ui/react'
import { login } from '../services/login';

export const Card = () => {
    return (
        <ChakraProvider>
            <Box minHeight='100vh' backgroundColor='blue' padding='25px'>
                <Header>
                    Fomulário
                </Header>
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
    )
}