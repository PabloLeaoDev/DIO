import { PodcastModel } from "../models/podcast-model"
import { repositoryPod } from "../repositories/pod-repositories"

export const serviceListEpisodes = async (): Promise<PodcastModel[]> => {
    const data = await repositoryPod()

    return data
}