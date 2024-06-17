import { HttpResponse } from "../models/interfaces"

export const OK = async (data: any): Promise<HttpResponse> => {
    return {
        statusCode: 200,
        body: data
    }
}

export const NO_CONTENT = async (): Promise<HttpResponse> => {
    return {
        statusCode: 204,
        body: null
    }
}