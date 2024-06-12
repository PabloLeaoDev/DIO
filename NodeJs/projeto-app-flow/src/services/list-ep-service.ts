import { IncomingMessage } from "http"
import { PodcastModel } from "../models/podcast-model"
import { repositoryPod } from "../repositories/pod-repositories"

export const serviceListEpisodes = async (req: IncomingMessage): Promise<PodcastModel[]> => {
    let isQueryStr: string | undefined = req.url?.split('?')[1]
    let data = await repositoryPod()

    if (isQueryStr && isQueryStr.length > 0) {
        data = null
    }

    return data
}