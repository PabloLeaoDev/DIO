import { PlayerModel } from "../models/interfaces"
import playersJson from './players.json'

const database: PlayerModel[] = playersJson

const findAllPlayers = async (): Promise<PlayerModel[]> => {
    return database
}

const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
    const player: PlayerModel | undefined = database.find((p) => p.id === id)

    return player
}

export { findAllPlayers, findPlayerById }