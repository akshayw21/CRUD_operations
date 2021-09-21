const express=require("express")
const mongoose=require("mongoose")
const url="mongodb://localhost/DemoDB"

const app=express()


mongoose.connect(url,{useNewUrlParser:true})
const con=mongoose.connection

con.on('open',function(){
    console.log('Connected...')
})
app.use(express.json())

const DemoDBrouters=require("./routers/DemoDB")
app.use("/DemoDB", DemoDBrouters)
app.listen(3000,()=>{
    console.log("server started...")
})