import express, { Request, Response } from 'express'

const app = express()

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({ 'player': 'Messi' })
})

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server created in port ${PORT}`)
})