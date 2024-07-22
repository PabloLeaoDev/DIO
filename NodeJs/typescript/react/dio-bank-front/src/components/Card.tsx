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
import { useState } from 'react';

export const Card = () => {
    const [ email, setEmail ] = useState('');
    const [ username, setUsername ] = useState('Guest');

    return (
        <ChakraProvider>
            <Box minHeight='100vh' backgroundColor='#319795' padding='25px'>
                <Header>
                    DIO Bank
                </Header>
                <Box className='container'>
                    <Center>
                        <h1>Login</h1>
                    </Center>
                    <Center>
                        <Input placeholder='username' className='input' onChange={(event) => setUsername(event.target.value)} />
                    </Center>
                    <Center>
                        <Input placeholder='email' className='input' value={email} onChange={(event) => setEmail(event.target.value)} />
                    </Center>
                    <Center>
                        <Input placeholder='password' className='input' />
                    </Center>
                    <Center>
                        <Button colorScheme='teal' size='sm' className='btn' onClick={login(username)}>
                            Entrar
                        </Button>
                    </Center>
                </Box>    
            </Box>
        </ChakraProvider>
    )
}