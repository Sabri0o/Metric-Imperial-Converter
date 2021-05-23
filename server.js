const express = require("express")
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use('/public',express.static(__dirname + "/public"));

app.get('/',function(req,res){
    res.sendFile(__dirname + '/views/index.html')
})

app.listen(3000,()=>{
    console.log("listening on port 3000")
})