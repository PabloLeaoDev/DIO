import * as playerRepo from "../repositories/player-repository"
import { OK, NO_CONTENT } from "../utils/http-helper"

export const getPlayerService = async () => {
    const data = await playerRepo.findAllPlayers()
    let response = null

    if (data) {
        response = await OK(data)
    } else {
        response = await NO_CONTENT()
    }

    return response
}