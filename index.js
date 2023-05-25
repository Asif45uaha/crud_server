import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import Connection from './database/dbConn.js'
import router from './routes/route.js'

const app = express()
dotenv.config()
app.use(cors())
app.use(express.json())
// app.use(express.urlencoded({ extended: false }))

//Database connection
Connection()

//routes
app.use("/api", router)



app.listen(process.env.PORT_NO, () => {
    console.log(`Server is Running on port no: ${process.env.PORT_NO}`);
})