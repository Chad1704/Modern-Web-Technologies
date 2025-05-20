import express from "express";

const router = express.Router();

router.get("/name",(req,res)=>{
    res.send("Chad Katz");
    


})

router.get("/",(req,res)=>{
    res.send("Home")
    


})

router.get("/greeting",(req,res)=>{
    res.send("Chad Katz || n01673911")
    


})




router.get("/add/:num1/:num2",(req,res)=>{
    console.log(req.params);

    console.log(req.params.num1);
    console.log(req.params.num2);

   let Num1 = parseFloat(req.params.num1);
   let Num2 = parseFloat(req.params.num2);

     const sum = Num1 + Num2
    
    res.send(`${sum}`);

    


})

router.get("/calculate/:num1/:num2/:sign",(req,res)=>{
    console.log(req.params);

    console.log(req.params.num1);
    console.log(req.params.num2);
    console.log(req.params.sign);

   let Num1 = parseFloat(req.params.num1);
   let Num2 = parseFloat(req.params.num2);
   let sign = req.params.sign


   switch (sign) {
    case '+':
        const sum = Num1 + Num2
        return res.send(`${sum}`);
    case '-':
        const difference = Num1 - Num2
        return res.send(`${difference}`);;
    case '*':
        const product = Num1 *Num2
        return res.send(`${product}`);;
        
    case '/':
        if (Num2 != 0){
            const quotient = Num1/Num2
            return res.send(`${quotient}`);

        }
        else{
            return res.send ("Num 2 cannot be 0");
        }
    }

     

    


})






export default router