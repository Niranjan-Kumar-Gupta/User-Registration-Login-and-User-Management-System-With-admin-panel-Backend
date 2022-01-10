import express from 'express';
import routes from './routes';
import { APP_PORT,DB_URL } from './config';
import errorHandler from './middlewares/errorHandler';
import mongoose  from 'mongoose';


mongoose.connect(DB_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error'));
db.once('open',()=>{
    console.log('DB connected')
})



const app = express();


const cors=require("cors");

const corsOptions ={
   origin:'*', 
   credentials:true, //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) 

app.use(express.json());

app.use('/api',routes);

app.use(errorHandler);



app.listen(APP_PORT,()=>{
    console.log(`listning on port ${APP_PORT}`)
})