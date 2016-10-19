// grab the mongoose modules
var mongoose = require("mongoose");

// define schema for nerd model
var nerdSchema = new mongoose.Schema({
  name: {type: String, default: ""}
});

// define out nerd model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model("Nerd", nerdSchema);
