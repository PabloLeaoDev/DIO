import * as clubsJson from './clubs.json'
import { ClubModel } from '../models/interfaces'

const database: ClubModel[] = clubsJson

export const findAllClubs = async (): Promise<ClubModel[]> =>  {
    console.log(database);
    return database
}
