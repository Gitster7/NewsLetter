const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const client = require("@mailchimp/mailchimp_marketing");

client.setConfig({
  apiKey: "b87f3077a2b8a0170d89f763ad045e4a-us7",
  server: "us7",
});

app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/signup.html");
});


app.post("/", function(req, res) {

var fname = req.body.fname;
var lname = req.body.lname;
var email = req.body.email;


const run = async () => {
  const response = await client.lists.addListMember("8050903aa2", {
    email_address: email,
    status: "Subscribed",
  });
  console.log(response);
};

run();

});

app.listen(3000, function() {
  console.log("server listening on port 3000");
})



//API KEY
//b87f3077a2b8a0170d89f763ad045e4a-us7

//// list ID 8050903aa2

///lists/{list_id}/members
