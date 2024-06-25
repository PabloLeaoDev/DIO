import { PlayerModel, StatisticsModel } from "../models/interfaces"
import * as playerRepo from "../repositories/player-repository"
import * as httpResponse from "../utils/http-helper"

export const getPlayerService = async () => {
    const data = await playerRepo.findAllPlayers()
    let response = null

    if (data) {
        response = await httpResponse.OK(data)
    } else {
        response = await httpResponse.NO_CONTENT()
    }

    return response
}

export const getPlayerByIdService = async (id: number) => {
    const data = await playerRepo.findPlayerById(id)
    let response = null

    if (data) {
        response = await httpResponse.OK(data)
    } else {
        response = await httpResponse.NO_CONTENT()
    }

    return response
}

export const createPlayerService = async (player: PlayerModel) => {
    let response = null

    if (Object.keys(player).length !== 0) {
        console.log('deu bom');
        await playerRepo.insertPlayer(player)
        response = await httpResponse.CREATED()
    } else {
        console.log(player);
        response = await httpResponse.BAD_REQUEST()
    }

    return response
}

export const deletePlayerService = async (id: number) => {
    let response = null
    const isDeleted = await playerRepo.deletePlayerById(id)

    if (isDeleted) {
        response = await httpResponse.OK({ message: 'deleted' })
    } else {
        response = await httpResponse.BAD_REQUEST()
    }
    
    
    return response
}

export const updatePlayerService = async (id: number, statistics: StatisticsModel) => {
    let response = null

    const data = await playerRepo.updatePlayerById(id, statistics)
    
    if (Object.keys(data).length === 0) {
        response = await httpResponse.BAD_REQUEST()
    } else {
        response = await httpResponse.OK({ message: 'updated' })
    }

    return response
}