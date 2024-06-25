import { PlayerModel, StatisticsModel } from "../models/interfaces"
import * as playersJson from './players.json'

const database: PlayerModel[] = playersJson

const findAllPlayers = async (): Promise<PlayerModel[]> => {
    return database
}

const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
    const player: PlayerModel | undefined = database.find((p) => p.id === id)

    return player
}

const insertPlayer = async (player: PlayerModel) => {
    database.push(player)
}

const deletePlayerById = async (id: number) => {
    const playerIndex: number = database.findIndex((p) => p.id === id)

    if (playerIndex !== -1) {
        database.splice(playerIndex, 1)
        return true
    }

    return false
}

const updatePlayerById = async (id: number, statistics: StatisticsModel): Promise<PlayerModel> => {
    const playerIndex: number = database.findIndex((p) => p.id === id)

    if (playerIndex !== -1) {
        database[playerIndex].statistics = statistics
    }

    return database[playerIndex]
}

export { findAllPlayers, findPlayerById, insertPlayer, updatePlayerById, deletePlayerById }