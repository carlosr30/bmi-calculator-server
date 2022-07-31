import {} from "dotenv"

import bmiRoutes from "./v1/routes/bmi.routes"
import express from "express"

const server = express()

server.use(express.json())
server.use("/api/v1/", bmiRoutes)

server.listen(process.env.PORT || 4000, async () => {
    console.log(`Listening on port 4000...`)
})

export default server
