const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const multer = require('multer');
const search = require('./core'); 

app.use(bodyParser.urlencoded({
  extended: true
}));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});

app.post('/find/near',(req,res)=>{
    let uLong = req.body['long'],
        uLat = req.body['lat'],
        uType = req.body['type'],
        uR = req.body['r'];
    let results = search.findLoc(uLong,uLat,uType,uR);
    console.log(results);
});

app.post('/find/dist',(req,res)=>{
    let type = req.body['type'],
        district = req.body['district'];
    let results = search.findLocInDistrict(type,district);
    console.log(results);
});