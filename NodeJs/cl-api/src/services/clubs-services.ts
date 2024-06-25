import * as clubsRepo from "../repositories/clubs-repository"
import * as httpResponse from "../utils/http-helper"

export const getClubService = async () => {
    const data = await clubsRepo.findAllClubs()
    let response = null
    console.log(data);

    if (data) {
        response = await httpResponse.OK(data)
    } else {
        response = await httpResponse.NO_CONTENT()
    }

    return response
}