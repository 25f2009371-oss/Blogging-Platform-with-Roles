const express=require("express");
const app=express()

app.get("/",(req,res) => {
res.send("API of my Website running");
});

const PORT=5000;
app.listen(PORT,()=>{
console.log(`Server running on https://localhost:${PORT}`);
});