// index.js
// where your node app starts

// init project
var express = require("express");
let bodyParser = require("body-parser");

var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// your first API endpoint...
app.get("/api/:hello", function (req, res) {
  let obj
    let newdate = new Date(req.params.hello);
    console.log(newdate.toUTCString());
    if (newdate.toUTCString() == "Invalid Date") {

      let newer= Number(req.params.hello)

      let newerDate = new Date(newer)
      if (newerDate.toUTCString()=="Invalid Date"){
        console.log(newerDate)
        obj = { error: newdate.toUTCString() };

      }
      else{
        console.log("This one", newerDate)
        obj = {utc:newerDate.toUTCString(), unix:Date.parse(newerDate)}
      }

      
    } else {
      obj = {utc:newdate.toUTCString(), unix:Date.parse(newdate)}
    }
    res.json(obj)
  // }
  // else{
  //   let newdate=new Date(Number(req.params.hello))
  //   res.json({utc:newdate.toUTCString(), unix:Number(req.params.hello)})
  // }

});

app.get("/api/", function (req, res, next) {
  let date = new Date();
  let strdate = date.toUTCString();
  res.json({ unix: date.getTime(), utc: strdate });
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
