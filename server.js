const express =require('express');
const app=express();
const PORT=8000;
const path=require("path")
app.use(express.static(path.join(__dirname,'tweets','build')))

app.listen(PORT,()=>{
    console.log(`server is listening on port ${PORT}`)
})
