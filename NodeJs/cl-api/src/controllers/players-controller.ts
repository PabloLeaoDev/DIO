import { Request, Response } from "express"
import { getPlayerService } from "../services/players-services"

const getPlayer = async (req: Request, res: Response) => {
    const httpRes = await getPlayerService()

    res.status(httpRes.statusCode).json(httpRes.body)
}

export default getPlayer