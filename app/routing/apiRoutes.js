console.log('API Routes Connected..');

var friends = require("../data/friends.js");

module.exports = function(app) {
    // get is basic, just return all friends
    app.get("/api/friends", function(req, res) {
        console.log("returning all friends as json objects");
        res.json(friends);
    });



}