var express = require('express')

var app = express()
app.get('/',function(req,res){
    console.log('route/ ')
    console.log('ass')
    res.send("hello world testing")
})

app.listen(8080)