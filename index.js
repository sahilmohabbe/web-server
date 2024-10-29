const express = require('express')
const mongoose = require ('mongoose')
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.json());
app.listen(8000,()=>{console.log("Server running on 8000")});
app.get("/", (req, res)=>{
  res.send("Hello World");
})
app.post('/api/cars',(req,res)=>{
  const{name, model} = req.body;
  console.log(name)
  console.log(model)
  res.send("Submitted Cars...")
})
mongoose.connect("mongodb://localhost:27017/Cars",{
  UseNewurlParser : true,
  UseUnifiedTopolopgy: true

}
)
.then(()=>{console.log("Connection successful")})
.catch((error)=>{console.log("Connection failed...")})