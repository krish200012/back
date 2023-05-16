const urlencoded= require('body-parser');
const express= require ('express');
const dotenv=require('dotenv').config()
const cors=require('cors')
const connectDB=require('../backend/config/db')

connectDB;

const port=process.env.PORT || 5000 ;
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

// app.use('/pizza',require('./routes/routes'));
app.use('/user',require('../backend/routes/userRoutes'))
app.use('/admin/pizza',require('../backend/routes/pizzaRoutes'));
app.use('/admin/stores',require('../backend/routes/outletRoutes'));



app.listen(port,(err)=>{
    if(err)
    {
        throw new Error(`Error ${err}`);
    }
    else{
        console.log(`Server Up and Running on port ${port} `)
    }
})
