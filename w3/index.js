import express from "express";

const app = express();
const PORT = process.env.PORT || 8000

app.listen(PORT,()=>{

    console.log(` opened site on: http://localhost:${PORT}`)
})


app.get("/", (req,res)=>{

    res.send("HELLO FROM SERVER!");

})


app.post("/", (req,res)=>{

    res.send("HELLO FROM POST!");

})



app.get("/params/:itemID", (req,res)=>{

    console.log(req.url);
    console.log(req.query);
    console.log(req.params);
    console.log(req.body);
    res.send("you did it at the params endpoint");

})