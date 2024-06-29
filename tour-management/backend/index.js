import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

//database connection 
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB database connected');
    } catch (err) {
        console.error('MongoDB database connection failed', err);
    }
};
//testing
app.get('/',(req,res)=>{
    res.send('api is working');
});


app.use(express.json())
app.use(cors())
app.use(cookieParser())

app.listen(port,()=>{
    connect();
    console.log('server listening on port',port);
})