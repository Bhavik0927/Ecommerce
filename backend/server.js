import express from 'express';
import 'dotenv/config';
import mongodb from './database.js';
import router from './routes/productRoute.js';

const app = express();
app.use(express.json());

const PORT = process.env.PORT;
mongodb();


app.use('/api/v1/',router);

app.get('/',(req,res) =>{
    res.send("Home Page");
})


app.listen(PORT,()=>{
    console.log(`app is started at ${PORT}`)
})

