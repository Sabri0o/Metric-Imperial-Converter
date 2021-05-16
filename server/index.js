const express = require("express")
const app = express()

app.route('/').get(function(req,res){
    res.send('testing get request')
})

app.listen(3000,()=>{
    console.log('Listening on port 3000...')
})