// grab the nerd model
var Nerd = require("./models/nerd");

module.exports = function(app) {
  // server routes
  // handle things like api calls

  // authentication routes

  // sample api route
  app.get("/api/nerds", function(req, res) {
    // use mongoose to get all nerds in database
    Nerd.find(function(err, nerds) {
      // if there is an error retrieving, send the error
      // nothing after res.send will execute!
      if (err) {
        res.send(err);
      }
      res.json(nerds); // return all nerds in JSON
    });
  });

  // routes for creating (POST), deleting (DELETE), etc.

  // frontend routes
  // route to handle all angular requests
  app.get("*", function(req, res) {
    // load our public/index.html file
    res.sendfile("./public/index.html");
  });
};
