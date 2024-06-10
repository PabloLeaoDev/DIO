import { repositoryPod } from "../repositories/pod-repositories"

export const serviceFilterEpsodes = async (podcastName: string) => {
    const data = await repositoryPod(podcastName)
    return data
}