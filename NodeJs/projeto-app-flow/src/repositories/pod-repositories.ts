import fs from 'fs'
import path from 'path'
import { PodcastModel } from '../models/podcast-model'

const pathData = path.join(__dirname, '../repositories/podcasts.json')

export const repositoryPod = async (podcastName?: string) => {
    const rawData = fs.readFileSync(pathData, "utf-8")
    let jsonFile = JSON.parse(rawData)

    if (podcastName) {
        let newJson: PodcastModel[] = []
        jsonFile = jsonFile.filter((pod: PodcastModel) => {
            if (pod.podcast === podcastName){
                newJson.push(pod)
            }
        })
        jsonFile = newJson
    }

    return jsonFile
}