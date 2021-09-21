const express=require("express")
const router=express.Router()
const DemoDB=require("../model/DemoDB")

router.get("/",async(req,res)=>{
    try{
        const DemoDBs=await DemoDB.find()
        res.json(DemoDBs)

    }catch(err){
    res.send("Error"+err);
}
});

router.get("/:id",async(req,res)=>{
    try{
        const DemoDBs=await DemoDB.findById(req.params.id)
        res.json(DemoDBs)

    }catch(err){
    res.send("Error"+err);
}
});

router.post('/',async(req,res) => {
    const demodb=new DemoDB({
        name:req.body.name,
        tech:req.body.tech,
        sub:req.body.sub
    })
    try{
        const a1=await demodb.save()
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
});

router.patch('/:id',async(req,res)=>{
    try{
        const demodb=await DemoDB.findById(req.params.id)
        demodb.tech=req.body.tech
        const c1=await demodb.save()
        res.json(c1)
    }catch(err){
        res.send('Error')
    }
})

router.delete('/:id',async(req,res)=>{
    try{
        const demodb=await DemoDB.findByIdAndRemove(req.params.id)
        //demodb.tech=req.body.tech
        //const c1=await demodb.save()
        res.json(demodb)
    }catch(err){
        res.send('Error')
    }
})
module.exports=router