import express from "express"
import router from "./routes"

function createApp() {
    const app = express()

    app.use('/api', router)
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))

    return app
}

export default createApp