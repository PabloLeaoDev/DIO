import { PlayerModel } from "../models/interfaces"
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
        response = httpResponse.OK(data)
    } else {
        response = httpResponse.NO_CONTENT()
    }

    return response
}

export const createPlayerService = async (player: PlayerModel) => {
    let response = null

    if (Object.keys(player).length !== 0) {
        console.log('deu bom');
        await playerRepo.insertPlayer(player)
        response = httpResponse.CREATED()
    } else {
        console.log('bad');
        response = httpResponse.BAD_REQUEST()
    }

    return response
}

export const deletePlayerService = async (id: number) => {
    let response = null

    await playerRepo.deletePlayer(id)
    response = httpResponse.OK({ message: 'deleted' })
    
    return response
}
