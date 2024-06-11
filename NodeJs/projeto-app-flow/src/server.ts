import * as http from 'http'
import { getListEpsodes, getFilterEpsodes } from './controllers/pod-controll'

const server = http.createServer(async (req: http.IncomingMessage, res: http.ServerResponse) => {
    
    const [baseUrl, queryString] = req.url?.split('?') ?? ['', '']
    
    if (req.method === 'GET' && baseUrl === '/api/list') {
        await getListEpsodes(req, res)
    } else if (req.method === 'GET' && baseUrl === '/api/epsode') {
        await getFilterEpsodes(req, res)
    }
})

const port = process.env.PORT

server.listen(port, () => {
    console.log(`Servidor criado na porta ${port}.`);
})