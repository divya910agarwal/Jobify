/* eslint-disable prettier/prettier */
import express from 'express';
import dotenv from 'dotenv';
const app = express()
dotenv.config();

//db and authenticateUser
import connectDB from './db/connect.js'

//routers
import authRouter from './routes/authRoutes.js'
import jobsRouter from './routes/jobsRoutes.js'


// middleware

import notFoundMiddleware from './middleware/not-found.js'
import errorHandlerMiddleware from './middleware/error-handler.js'

app.use(express.json())


app.get('/',(req,res)=>{
    throw new Error('error')
    res.send("welcome")
})

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', jobsRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.Port || 5000;

app.listen(port,()=>{
  console.log(`Server is listening on port ${port}...`)
})

const start = async () => {
    try{
        await connectDB(process.env.MONGO_URL)
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}...`);
        })
    } catch (error) {
        console.log(error);
    }
}
start();