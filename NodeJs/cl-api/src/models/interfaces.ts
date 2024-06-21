export interface PlayerModel {
    id: number,
    name: string,
    club: string,
    nationality: string,
    position: string,
    statistics: {
        Overall: number,
        Pace?: number,
        Shooting?: number,
        Passing?: number,
        Dribbling?: number, 
        Defending?: number,
        Physical?: number,
        // goalkeeper properties
        Diving?: number,
        Handling?: number,
        Kicking?: number,
        Reflexes?: number,
        Speed?: number,
        Positioning?: number
    }
}

export interface HttpResponse {
    statusCode: number,
    body: any
}

export interface StatisticsModel {
    Overall: number,
    Pace?: number,
    Shooting?: number,
    Passing?: number,
    Dribbling?: number, 
    Defending?: number,
    Physical?: number,
    // goalkeeper properties
    Diving?: number,
    Handling?: number,
    Kicking?: number,
    Reflexes?: number,
    Speed?: number,
    Positioning?: number
}