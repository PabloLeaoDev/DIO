import http from 'http'
import { getListEpsodes, getFilterEpsodes } from './controllers/pod-controll'
import { Routes } from './routes/routes'
import { HttpMethods } from './utils/http-methods'

export const app = async (req: http.IncomingMessage, res: http.ServerResponse) => {
    const baseUrl = req.url?.split('?')[0]
    
    if (req.method === HttpMethods.GET && baseUrl === Routes.LIST) {
        await getListEpsodes(req, res)
    } else if (req.method === HttpMethods.GET && baseUrl === Routes.EPISODE) {
        await getFilterEpsodes(req, res)
    }
}