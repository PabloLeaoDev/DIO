import { IncomingMessage, ServerResponse } from 'http'
// services
import { serviceListEpisodes } from '../services/list-ep-service'
import { serviceFilterEpsodes } from '../services/filter-ep-service'
// utils
import { StatusCode } from '../utils/status-code'
import { ContentType } from '../utils/content-type'
// models
import { FilterPodModel } from '../models/filter-pod-model'

// controller anêmico: não tem regras de negócio, pois está tudo nos services.

const defaultContent = { 'content-type': ContentType.JSON}

const getListEpsodes = async (req: IncomingMessage, res: ServerResponse) => {
    const content = await serviceListEpisodes()

    res.writeHead(StatusCode.OK, defaultContent)
    res.write(JSON.stringify(content))

    res.end()
}

const getFilterEpsodes = async (req: IncomingMessage, res: ServerResponse) => {
    const content: FilterPodModel = await serviceFilterEpsodes(req.url)

    res.writeHead(content.statusCode, defaultContent)
    res.write(JSON.stringify(content.body))

    res.end()
}

export { getListEpsodes, getFilterEpsodes } 