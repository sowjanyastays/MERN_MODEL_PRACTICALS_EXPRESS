const express = require('express')
const app = express()
const serviceRoute = require('./routes/serviceRoute')

const PORT = 3500;

app.get('/',(request, response)=>{
    response.send("Its working")
})

app.use('/services',serviceRoute)

app.listen(PORT,()=>console.log(`Listening to port ${PORT}`));