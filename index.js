const express=require('express')
const app=express()

app.get('/',(req,res)=>{
    res.status(200).send('Mathsismagic Page Coming Soon...')
})

const port=process.env.port||5000;

app.listen(port,()=>{
    console.log(`Server Listening on port ${port}...`)
})