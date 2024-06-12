import { PodcastModel } from "./podcast-model";

export interface FilterPodModel {
    statusCode: number,
    body: PodcastModel[]
}