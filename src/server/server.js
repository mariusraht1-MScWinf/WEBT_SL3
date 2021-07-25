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


// Get all Terminologies
app.get("/api/terminologies",  async (req,res) => {
try {
  var result = await Terminology.find().exec();
  res.send(result);
} catch (error) {
  console.log(error);
  res.status(500).send(error);
}

//get one terminology
app.get("/api/terminologies/:id", async (req, res) => {
  try {
    var result = await Terminology.findOne({id: req.params.id}).exec();
    res.send(result);
  }
  catch(error) {
    res.status(500).send(error);
  }
} );

});
// add terminology
app.post("/api/terminologies", async (req, res) => {
  try {
    var last = await Terminology.find().sort('-id').limit(1).exec();
    var nextId = last === undefined ? 1 : last[0].id + 1;
    req.body["id"] = nextId;
    var terminology = new Terminology(req.body);
    var result = terminology.save();
    res.send(result);
  }
  catch (error) {
    res.status(500).send(error);
  }
} );

// update terminology
app.put("/api/terminologies", async (req, res) => {
  try {
    var result = await Terminology.findOneAndUpdate( {id: req.body.id}, req.body).exec();
    res.send(result);
  }
  catch(error) {
    res.status(500).send(error);
  }
} );
// delete terminology
app.delete("/api/terminologies/:id", async (req, res) => {
  try {
    var result = await Terminology.deleteOne({id:req.params.id}).exec();
    res.send(result);
  }
  catch(error) {
    res.status(500).send(error);
  }
} );



app.listen(port, () => {
  console.log(`TL3 backend app listening at http://localhost:${port}`);
});

