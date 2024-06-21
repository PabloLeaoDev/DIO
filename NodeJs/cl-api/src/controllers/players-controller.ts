import { Request, Response } from "express"
import * as playerService from "../services/players-services"
import { NO_CONTENT } from "../utils/http-helper"
import { StatisticsModel } from "../models/interfaces"

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
    console.log(bodyValue);
    const httpRes = await playerService.createPlayerService(bodyValue)

    if (httpRes) {
        res.status(httpRes.statusCode).json(httpRes.body)
    } else {
        const response = await NO_CONTENT()
        res.status(response.statusCode).json(response.body)
    }

}

const deletePlayer = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    const httpRes = await playerService.deletePlayerService(id)

    res.status(httpRes.statusCode).json(httpRes.body)
}

const updatePlayer = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    const bodyValue:  StatisticsModel = req.body.statistics
    const httpRes = await playerService.updatePlayerService(id, bodyValue)

    res.status(httpRes.statusCode).json(httpRes.body)
}

export { getPlayer, getPlayerById, postPlayer, updatePlayer, deletePlayer }