import { IncomingMessage, ServerResponse } from 'http'
import { serviceListEpisodes } from '../services/list-ep-service'
import { serviceFilterEpsodes } from '../services/filter-ep-service'

// contoller anêmico: não tem regras de negócio, pois está tudo nos services.

const getListEpsodes = async (req: IncomingMessage, res: ServerResponse) => {
    const content = await serviceListEpisodes()

    res.writeHead(200, { 'content-type': 'application/json' })
    res.end(JSON.stringify(content))
}

const getFilterEpsodes = async (req: IncomingMessage, res: ServerResponse) => {
    const content = await serviceFilterEpsodes('flow')

    res.writeHead(200, { 'content-type': 'application/json' })
    res.end(JSON.stringify(content))
}

export { getListEpsodes, getFilterEpsodes } 