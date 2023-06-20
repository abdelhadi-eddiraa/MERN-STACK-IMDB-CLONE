require('dotenv').config();
const express=require('express');
const cors=require('cors')

const DbConnect=require('./DbConnect')

const movieRoutes=require('./routes/movie')


DbConnect();
const app=express();


app.use(express.json())
app.use(cors())

app.use('/api',movieRoutes)

const port=process.env.PORT || 8080;
app.listen(port,function(){
    console.log(`app starting on port ${port} `)
})