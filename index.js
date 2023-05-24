const express = require('express'); // added by venkat on 24 May 2023
const app = express();

app.set("port", 3000);


app.get("/", function (req, res) {
  res.send("Node js Test Project Works");
});

app.use("/test/", require("./allroutes/testRoutes"));

app.listen(app.get("port"), function () {
  console.log("Port", app.get("port"));
});

module.exports = app;
