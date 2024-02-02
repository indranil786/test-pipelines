const express= require('express');

const app= express({encodeURIComponent:true});

app.get('/',(req,res)=>{
    res.send("Health Check Successful for docker pipeline")
})
app.get('/test',(req,res)=>{
    res.send("Testing Docker")
})

const server =app.listen(8080,()=>{
    console.log("Docker Service Listening to port 8080..")
})
process.on('SIGTERM',()=>{
    server.close(()=>{
        console.log('Graceful Shutdown')
        process.exit(1)
    })
});
process.on('SIGINT',()=>{
    server.close(()=>{
        console.log('Graceful Shutdown')
        process.exit(0)
    })
})
