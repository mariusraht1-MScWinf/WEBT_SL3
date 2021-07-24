const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({extended:true}));
let mongoose = require('mongoose');
mongoose.connect('mongodb://vawi11:ielyromb@mongodb.l1n.de:27017/vawi11', {useNewUrlParser: true})
let db = mongoose.connection;
db.once ('open', () => {console.log('DB is connected')})

let terminologySchema = new mongoose.Schema({
  id: {type: Number, unique:true, required: true },
  title: {type: String, required: true},
  desc: {type: String, required: true},
  chapter: {type: String, required: true},
  creator: {type: String, required: true}
})

const Terminology = mongoose.model('Terminology', terminologySchema );

function genId() {
  return Terminology.find().exec().length  + 1;
}

// Get all Terminologies
app.get("/api/terminologies",  (req,res) => {
try {
  console.log("HelloWord");
  var result =  Terminology.find().exec();
  res.send(result);
} catch (error) {
  console.log(error);
  res.status(500).send(error);
}

});
// add terminology
app.post("/api/terminologies", (req, res) => {
  try {
    console.log("bla post")
    console.log(req.body);
    req.body.id = genId();
    var terminology = new Terminology(req.body);
    var result = terminology.save();
    res.send(result);
  }
  catch (error) {
    res.status(500).send(error);
  }
} );

// update terminology
app.put("/api/terminologies/:id", (req, res) => {
  try {
    var result =  Terminology.findByIdAndUpdate(req.params.id, req.body).exec();
    res.send(result);
  }
  catch(error) {
    res.status(500).send(error);
  }
} );
// delete terminology
app.delete("/api/terminologies/:id", (req, res) => {
  try {
    var result = Terminology.deleteOne({_id:req.params.id}).exec();
    res.send(result);
  }
  catch(error) {
    res.status(500).send(error);
  }
} );

//get one terminology
app.get("/api/terminologies/:id",  (req, res) => {
  try {
    var result =  Terminology.findById(req.params.id).exec();
    res.send(result);
  }
  catch(error) {
    res.status(500).send(error);
  }
} );

app.listen(port, () => {
  console.log(`TL3 backend app listening at http://localhost:${port}`);
});

