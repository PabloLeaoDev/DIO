import fastify from "fastify"
import cors from '@fastify/cors'

const server = fastify({ logger: true })

// com a origin do cors definida, minha API não vai ser possivelmente bloqueado pelo browser
server.register(cors, {
    origin: '*'
})

const teams = [
    { id: 1, name: 'Ferrari' },
    { id: 2, name: 'Mercedes' },
    { id: 3, name: 'McLaren' }
]

const drivers = [
    { id: 1, name: 'Max Verstappen', team: 'Red Bull Racing' },
    { id: 2, name: 'Lewis Hamilton', team: 'Ferrari' },
    { id: 3, name: 'Lando Norris', team: 'McLaren' }
]

server.get('/teams', async (req, res) => {
    res.type('application/json').code(200)

    return { teams }
})

server.get('/drivers', async (req, res) => {
    res.type('application/json').code(200)

    return { drivers }
})

interface DriversParams {
    id: string
}

server.get<{ Params: DriversParams }>('/drivers/:id', (req, res) => {
    let id = parseInt(req.params.id)
    let driver = drivers.find((d) => d.id === id)
    
    if (!driver) {
        res.type('application/json').code(404)
        return { message: 'Server Not Found' }
    }

    res.type('application/json').code(200)
    return driver
})

server.listen({ port: 3333 }, () => {
    console.log('Server init');
})