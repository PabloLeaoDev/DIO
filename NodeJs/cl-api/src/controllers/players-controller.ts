import { Request, Response } from "express"
import * as playerService from "../services/players-services"
import { NO_CONTENT } from "../utils/http-helper"

const getPlayer = async (req: Request, res: Response) => {
    const httpRes = await playerService.getPlayerService()

    res.status(httpRes.statusCode).json(httpRes.body)
}

const getPlayerById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    const httpRes = await playerService.getPlayerByIdService(id)

    res.status(httpRes.statusCode).json(httpRes.body)
}

const postPlayer = async (req: Request, res: Response) => {
    const bodyValue = req.body
    const httpRes = await playerService.createPlayerService(bodyValue)

    if (httpRes) {
        res.status(httpRes.statusCode).json(httpRes.body)
    } else {
        const response = await NO_CONTENT()
        res.status(response.statusCode).json(response.body)
    }

}

export { getPlayer, getPlayerById, postPlayer }