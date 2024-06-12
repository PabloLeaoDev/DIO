import { IncomingMessage } from "http"
import { repositoryPod } from "../repositories/pod-repositories"
import { FilterPodModel } from "../models/filter-pod-model"
import { StatusCode } from "../utils/status-code"

export const serviceFilterEpsodes = async (podcastName: string | undefined): Promise<FilterPodModel> => {
    let resModel: FilterPodModel = {
        statusCode: 0,
        body: []
    }

    const queryString = podcastName?.split('?p=')[1] ?? ''
    const data = await repositoryPod(queryString)

    resModel.statusCode = 
        data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT

    resModel.body = data

    return resModel
}