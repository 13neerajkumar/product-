const express = require('express')
const app =express()
var port = process.env.PORT || 3000

 app.get('/',(req,res)=>{
     res.send({msg:' API Works'});
     })

app.listen(port,()=>{
    console.log(`server run at port ${port}`)
})


//import body parser
let bodyParser = require('body-parser');
	
//import mongoose
let mongoose = require('mongoose');

//configure bodyparser to hande the post requests
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

let customerAPI = require('./router'); 
app.use('/products',customerAPI);

//connect to mongoose
const dbPath = 'mongodb://localhost/assignment';
const options = {
    useNewUrlParser: true, useUnifiedTopology: true
}
const mongo = mongoose.connect(dbPath, options);
mongo.then(() => {
    console.log('connected');
}, error => {
    console.log(error, 'error');
})