import express from "express";
import cors from "cors";
import multer from "multer";

const app = express();
const PORT = process.env.PORT;


app.get('/fetch/single', (req,res)=>{

});


app.post('/save/single', (req,res)=>{

});


app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})